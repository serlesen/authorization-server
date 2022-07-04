create table if not exists auth_user (
    id bigserial primary key,
    login text not null,
    password text not null
);