type Locale = 'fr' | 'en' | undefined;

type Views = {
	slug: string;
	views: number;
}

type RepoInfo = {
	stars: number;
	forksCount: number;
}

export type GroupId = "frontend" | "backend" | "database" | "mobile" | "others"