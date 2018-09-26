CREATE TABLE task.tasks (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    task VARCHAR(100),
    limit_manth VARCHAR(10),
    limit_day int,
    limit_year int,
    limit_hour int,
    limit_minute int,
    limit_second int
);