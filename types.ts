
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  quantity: number;
  available: number;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
}

export interface IssuedBook {
  id: string;
  bookId: string;
  memberId: string;
  issueDate: string;
  dueDate: string;
  returnDate: string | null;
}

export type View = 'DASHBOARD' | 'BOOKS' | 'MEMBERS' | 'ISSUED';
