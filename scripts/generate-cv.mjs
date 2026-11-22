// Génère le CV PDF (public/cv.pdf) à partir des données de src/data.js.
// Utilisation : npm run cv
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'
import { education, experiences, profile, projects, skills } from '../src/data.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.resolve(__dirname, '../public/cv.pdf')

const BLUE = '#1a37bf'
const DARK = '#0f172a'
const GREY = '#475569'
const LIGHT = '#c9d6f5'
const SEP = '#dbe2f0'
const WHITE = '#ffffff'
const SIDEBAR_LINE = '#5b74d6'

const doc = new PDFDocument({ size: 'A4', margin: 0 })
doc.pipe(fs.createWriteStream(outPath))

const W = doc.page.width
const H = doc.page.height
const SIDEBAR = 200
const PAD = 32
const mainX = SIDEBAR + PAD
const mainW = W - mainX - PAD

// ---------------------------------------------------------------- Barre latérale
doc.fillColor(BLUE).rect(0, 0, SIDEBAR, H).fill()

// Avatar (photo si fournie, sinon initiales)
const cx = SIDEBAR / 2
const cy = 96
const r = 44
const photoPath = profile.photo
  ? path.resolve(__dirname, '../public', profile.photo.replace(/^\//, ''))
  : null

if (photoPath && fs.existsSync(photoPath)) {
  doc.save()
  doc.circle(cx, cy, r).clip()
  doc.image(photoPath, cx - r, cy - r, { width: r * 2, height: r * 2 })
  doc.restore()
  doc.circle(cx, cy, r).lineWidth(3).strokeColor(WHITE).stroke()
} else {
  doc.circle(cx, cy, r).fill(WHITE)
  doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(32)
  const initials = profile.initials
  doc.text(initials, cx - doc.widthOfString(initials) / 2, cy - 17)
}

let sy = cy + r + 32

function sideHeading(title) {
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(10.5)
  doc.text(title.toUpperCase(), 20, sy, { width: SIDEBAR - 40, characterSpacing: 0.8 })
  const y = doc.y + 4
  doc.moveTo(20, y).lineTo(SIDEBAR - 20, y).lineWidth(1).strokeColor(SIDEBAR_LINE).stroke()
  sy = y + 8
}

function sideLine(text) {
  doc.fillColor(LIGHT).font('Helvetica').fontSize(9.5)
  doc.text(text, 20, sy, { width: SIDEBAR - 40, lineGap: 2 })
  sy = doc.y + 6
}

sideHeading('Contact')
sideLine(profile.email)
sideLine(profile.phone)
sideLine(profile.location)

sy += 14
sideHeading('Compétences')
skills.forEach((s) => sideLine('•   ' + s.name))

// ---------------------------------------------------------------- Colonne principale
let my = PAD

function mainHeading(title) {
  doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(11.5)
  doc.text(title.toUpperCase(), mainX, my, { width: mainW, characterSpacing: 0.8 })
  const y = doc.y + 4
  doc.moveTo(mainX, y).lineTo(mainX + mainW, y).lineWidth(1.5).strokeColor(SEP).stroke()
  my = y + 12
}

function paragraph(text, opts = {}) {
  doc.fillColor(GREY).font('Helvetica').fontSize(10)
  doc.text(text, mainX, my, { width: mainW, lineGap: 2, ...opts })
  my = doc.y
}

// En-tête
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(23)
doc.text(profile.name, mainX, my, { width: mainW })
my = doc.y + 2
doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(12)
doc.text(profile.title, mainX, my, { width: mainW })
my = doc.y + 18

// Profil
mainHeading('Profil')
paragraph(profile.bio)
my += 16

// Expériences
mainHeading('Expériences professionnelles')
experiences.forEach((exp) => {
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10.5)
  doc.text(exp.role, mainX, my, { width: mainW })
  my = doc.y + 1
  doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(9)
  doc.text(`${exp.period}  ·  ${exp.place}`, mainX, my, { width: mainW })
  my = doc.y + 3
  paragraph(exp.description)
  my += 10
})
my += 4

// Formation
mainHeading('Formation')
education.forEach((edu) => {
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10.5)
  doc.text(edu.degree, mainX, my, { width: mainW })
  my = doc.y + 1
  doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(9)
  doc.text(`${edu.period}  ·  ${edu.school}`, mainX, my, { width: mainW })
  my = doc.y + 10
})
my += 4

// Projets
mainHeading('Projets')
projects.forEach((p) => {
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10.5)
  doc.text(p.name, mainX, my, { width: mainW })
  my = doc.y + 3
  paragraph(p.description)
  const meta = [p.tech.join(', '), p.link].filter(Boolean).join('  ·  ')
  if (meta) {
    doc.fillColor(BLUE).font('Helvetica').fontSize(9)
    doc.text(meta, mainX, my + 2, { width: mainW })
    my = doc.y
  }
  my += 10
})

doc.end()
console.log('CV généré :', outPath)
