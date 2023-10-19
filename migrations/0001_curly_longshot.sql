CREATE TABLE IF NOT EXISTS "nomenclature" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text NOT NULL,
	"category" varchar NOT NULL,
	"price" numeric(19, 4) NOT NULL,
	"user_id" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar NOT NULL,
	"seller_id" bigint NOT NULL,
	"customer_id" bigint NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order_content" (
	"order_id" bigint NOT NULL,
	"nomenclature_id" bigint NOT NULL,
	"count" integer NOT NULL,
	CONSTRAINT order_content_order_id_nomenclature_id PRIMARY KEY("order_id","nomenclature_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"password_hash" varchar NOT NULL
);
--> statement-breakpoint
DROP TABLE "test";