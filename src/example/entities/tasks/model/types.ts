export interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
	createdAt: Date;
	updatedAt: Date;
}

export enum TaskStatus {
	ACTIVE = "active",
	COMPLETED = "completed",
}
