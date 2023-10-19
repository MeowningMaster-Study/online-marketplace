DO $$ BEGIN
 ALTER TABLE "nomenclature" ADD CONSTRAINT "nomenclature_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_seller_id_user_id_fk" FOREIGN KEY ("seller_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_customer_id_user_id_fk" FOREIGN KEY ("customer_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_content" ADD CONSTRAINT "order_content_order_id_order_id_fk" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_content" ADD CONSTRAINT "order_content_nomenclature_id_nomenclature_id_fk" FOREIGN KEY ("nomenclature_id") REFERENCES "nomenclature"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
