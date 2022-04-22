import fs from 'fs'
import path from 'path'
import prepend from 'prepend'
import slugify from 'slugify'

const templatePath = path.join(__dirname, 'new.yml')
const template = fs.readFileSync(templatePath).toString()


if (!process.argv[2]) {
  console.log('Use the format `npm run new -- Title of project`')
}

const title = process.argv[2]
console.log(`Adding '${title}'.`)

const titleSlug = slugify(title, { lower: true })
const projects = path.join(__dirname, '..', 'content', 'projects.yml')
const newContents = template
  .split('TITLE')
  .join(title)
  .split('SLUG')
  .join(titleSlug)

prepend(projects, newContents, (error) => {
  if (error) console.log('error')
  console.log('done')
})
