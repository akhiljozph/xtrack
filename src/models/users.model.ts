import { DataTypes } from "sequelize";

import { sequelizeDBConfig } from "../config/sequelize.db.config";

const Users = sequelizeDBConfig.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    mobile_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10, 15],
        },
    },
    biological_sex: {
        type: DataTypes.ENUM('FEMALE', 'MALE', 'OTHERS'),
        allowNull: false,
        defaultValue: 'OTHERS',
    },
    account_type: {
        type: DataTypes.ENUM('GLOBAL_ADMIN', 'GROUP_ADMIN', 'GROUP_MEMBER'),
        allowNull: false,
        defaultValue: 'GROUP_MEMBER',
    },
    invitation_status: {
        type: DataTypes.ENUM('INVITED', 'PENDING', 'CONFIRMED'),
        allowNull: false,
        defaultValue: 'INVITED',
    },
    account_status: {
        type: DataTypes.ENUM('INVITED', 'ACTIVE', 'BLOCKED', 'DELETED'),
        allowNull: false,
        defaultValue: 'INVITED',
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_user_blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    blocked_reason: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

export default Users;