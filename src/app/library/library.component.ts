import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  standalone: true, // Declarar como standalone
  imports:[FormsModule,CommonModule],
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { title: '', author: '', description: '' };

  constructor() {}

  ngOnInit(): void {
    this.loadBooks();
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.books.push({ ...this.newBook });
      this.saveBooks();
      this.newBook = { title: '', author: '', description: '' };
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
    this.saveBooks();
  }

  saveBooks(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const booksData = localStorage.getItem('books');
      this.books = booksData ? JSON.parse(booksData) : [];
    } else {
      console.warn('localStorage no está disponible en este entorno.');
      this.books = []; // Asignar un valor predeterminado si no está disponible
    }
  }
  
}