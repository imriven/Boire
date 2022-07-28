# Boire Be

A wine tracker!

## Docker Database Instructions

To run a new instance of Postgres locally:

`$ docker run --name some-postgres -p 5400:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

Then set your environment variable in the terminal:

`$ export DATABASE_CONN=postgresql://postgres:mysecretpassword@localhost:5400/postgres`

To _stop_ the Postgres container:

`$ docker ps` (then note down the first couple of characters from the container id)

`$ docker stop <id_characters>`

To _start_ it back up again:

`$ docker ps -a` (then note down the first couple of characters from the container id)

`$ docker start <id_characters>`


After setting up docker container
run migrations and seeds.

set 