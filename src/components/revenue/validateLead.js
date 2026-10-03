const NAME_RE = /^\p{L}[\p{L} .'-]*$/u
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[0-9()\s-]+$/

export function validateLead({ fullName, companyName, email, phone }) {
  const errors = {}

  const name = fullName.trim()
  if (!name) errors.fullName = 'Please enter your full name.'
  else if (name.length < 2 || !NAME_RE.test(name)) errors.fullName = 'Please enter a valid name.'

  if (companyName.trim().length > 100) errors.companyName = 'Company name must be 100 characters or fewer.'

  const mail = email.trim()
  if (!mail) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(mail)) errors.email = 'Please enter a valid email address.'

  const tel = phone.trim()
  const digitCount = tel.replace(/\D/g, '').length
  if (!tel) errors.phone = 'Please enter your phone number.'
  else if (!PHONE_RE.test(tel) || digitCount < 7 || digitCount > 15) errors.phone = 'Please enter a valid phone number.'

  return errors
}
