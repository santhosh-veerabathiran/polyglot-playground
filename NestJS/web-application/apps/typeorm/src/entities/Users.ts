import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
	@PrimaryGeneratedColumn()
	user_id: number;

	@Column()
	fname: string;

	@Column({ nullable: true })
	lname: string;

	@Column({ unique: true })
	email: string;

	@Column({})
	phone_no: string;

	@Column()
	created_at: Date;

	@Column()
	updated_at: Date;
}
