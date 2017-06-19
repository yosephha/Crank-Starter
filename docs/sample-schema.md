# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## projects
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
website            | string    | optional
description        | text      | not null
image_url          | string    | optional
end_date           | string    | not null
funding_goal       | integer   | not null
details            | text      | optional
creator_id         | integer   | not null, foreign key (references users), indexed

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects), indexed
receiver_id  | integer   | not null, foreign key (references projects), indexed
title        | string    | not null
amount       | integer   | not null
description  | text      | not null

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
reward_id   | integer   | not null, foreign key (references rewards), indexed
backer_id   | integer   | not null, foreign key (references users), indexed
amount	    | integer   |	not null

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
