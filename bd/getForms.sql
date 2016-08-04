BEGIN TRANSACTION;
CREATE TABLE `surveys` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`created_on`	TEXT NOT NULL,
	`name`	TEXT NOT NULL
);
CREATE TABLE "forms" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`created_on`	TEXT NOT NULL,
	`author_id`	INTEGER NOT NULL,
	`survey_id`	INTEGER NOT NULL,
	FOREIGN KEY(`survey_id`) REFERENCES surveys
);
CREATE TABLE "custom_values" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`form_id`	INTEGER NOT NULL,
	`custom_field_id`	INTEGER NOT NULL,
	`value`	INTEGER NOT NULL,
	FOREIGN KEY(`form_id`) REFERENCES `forms`,
	FOREIGN KEY(`custom_field_id`) REFERENCES `custom_fields`
);
CREATE TABLE "custom_fields_forms" (
	`id`	INTEGER,
	`custom_field_id`	INTEGER NOT NULL,
	`form_id`	INTEGER NOT NULL,
	`field_order`	INTEGER NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(`custom_field_id`) REFERENCES custom_fields,
	FOREIGN KEY(`form_id`) REFERENCES `forms`
);
CREATE TABLE `custom_fields` (
	`id `	INTEGER PRIMARY KEY AUTOINCREMENT,
	`type`	TEXT NOT NULL,
	`name`	TEXT NOT NULL,
	`field_format `	TEXT NOT NULL,
	`possible_values `	TEXT,
	`regexp `	TEXT,
	`min_length `	NUMERIC NOT NULL,
	`max_length `	NUMERIC NOT NULL,
	`is_required `	INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE "custom_field_option" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`custom_field_id`	INTEGER NOT NULL,
	`option_order`	INTEGER NOT NULL,
	`option`	TEXT NOT NULL,
	FOREIGN KEY(`custom_field_id`) REFERENCES `custom_fields`
);
COMMIT;
