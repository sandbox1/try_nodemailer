
Node Mailer - SMTP sample

https://github.com/nodemailer/nodemailer/

create expected .env file (see `.env.sample`)
```
export MAIL_HOST=mail.somewhere.com.au
export MAIL_PORT=587
export MAIL_USER="name@somewhere.com.au"
export MAIL_PASS="xxxxxxxxxx"
export MAIL_FROM=name@fromwhere.com.au
export MAIL_FROM_NAME=name
export MAIL_TO=someone@towhere.com
export MAIL_TO_NAME=name

```

npm run compile

npm run start

Note: see pakcage.json as using `NODE_TLS_REJECT_UNAUTHORIZED` to avoid cert checks
