import { DataTypes, Model } from 'sequelize'
import { dbClient } from '../dbClient.js';

export interface T_Users {
    id: number;
    pc_username: string;
    os_type: string;
    mainboard: string;
    system_arch: string;
    processor: string;
    mac_addr: string;
    is_laptop: string;
}

export interface UsersAttributes extends T_Users {}
export type UsersCreationAttributes = UsersAttributes;
export class Users extends Model<UsersAttributes, UsersCreationAttributes> {}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pc_username: {
            type: new DataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        os_type: {
            type: DataTypes.STRING(255),
        },
        mainboard: {
            type: DataTypes.STRING(255),
        },
        system_arch: {
            type: DataTypes.STRING(255),
        },
        processor: {
            type: DataTypes.STRING(255),
        },
        mac_addr: {
            type: DataTypes.STRING(255),
        },
        is_laptop: {
            type: DataTypes.STRING(255),
        },
    },
    {
        sequelize: dbClient,
        timestamps: true,
        tableName: 'users',
        modelName: 'Users',
    }
)