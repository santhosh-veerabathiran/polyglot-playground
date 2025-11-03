import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { IAddress } from '@workspace/interfaces';
import { ETables } from '../tables';

@Entity(ETables.Users)
export class Users {
    @PrimaryColumn({ name: 'user_id' })
    userId: string;

    @Index()
    @PrimaryColumn()
    email: string;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name', nullable: true })
    lastName: string;

    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @Column({ name: 'address', type: 'jsonb' })
    address: IAddress;

    @Column({ name: 'status', default: 'CREATED' })
    status: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'last_updated_at' })
    lastUpdatedAt: Date;

    @Column({ name: 'created_by', default: 'SYSTEM' })
    createdBy: string;

    @Column({ name: 'last_updated_by', default: 'SYSTEM' })
    lastUpdatedBy: string;
}
