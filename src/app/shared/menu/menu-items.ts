export interface MainMenuItem {
	title: string;
	path: string;
}

export const menuItems: MainMenuItem[] = [
	{ title: 'Главная', path: '/book-list' },
	{ title: 'Добавить книгу', path: '/book-add' }
];
