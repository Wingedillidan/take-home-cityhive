# MyMessenger
Hello! This took quite a bit of time, so I wasn't able to get to every bonus.

Below are the instructions for running locally...

## Backend
**Requires either a Ruby version manager or `ruby-3.2.2`**
```bash
cd path/to/project/backend
```
Setup your .env file
```bash
# path/to/project/backend/.env

TWILIO_SID=""
TWILIO_SECRET=""
TWILIO_PHONE_NUMBER=""
TWILIO_USER_SID=""  # remember to use the user SID associated on the API page
```
Setup the rest of Rails
```bash
rvm use  # other ruby version managers are available...
bundle
rake db:setup db:migrate
rails s
```
## Frontend
**Requires `nvm` (or `npm` V18.18.0) and `yarn`**
```bash
cd path/to/project/frontend
```
```bash
nvm use
yarn
yarn start
```
Navigate to `localhost:4200`
## Improvements
There's a lot that still needs to be done given more time:
- Deploy it
- Field validation
- Error message display
- Testing everywhere
- Responsiveness adjustments
- Get delivery webhook to work
  - Display delivery time
- Use a styling framework
- Pagination probably
