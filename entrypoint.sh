#!/bin/bash
npx prisma generate
npx prisma db push
exec node --env-file .env ./dist/app/index.js