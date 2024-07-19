export type Locale = 'fr' | 'en' | undefined;

export type Views = {
	slug: string;
	views: number;
}

export type RepoInfo = {
	stars: number;
	forksCount: number;
}

export type GroupId = "frontend" | "backend" | "database" | "mobile" | "others"