import { BookLibraryModule } from './book-library.module';

describe('BookLibraryModule', () => {
  let bookLibraryModule: BookLibraryModule;

  beforeEach(() => {
    bookLibraryModule = new BookLibraryModule();
  });

  it('should create an instance', () => {
    expect(bookLibraryModule).toBeTruthy();
  });
});
