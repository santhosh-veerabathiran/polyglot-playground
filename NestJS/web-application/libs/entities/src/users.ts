import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
	@PrimaryColumn({ name: 'user_id' })
	userId: number;

	@PrimaryColumn()
	email: string;

	@Column({ name: 'first_name' })
	firstName: string;

	@Column({ name: 'last_name', nullable: true })
	lastName: string;

	@Column({ name: 'phone_no' })
	phoneNo: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
