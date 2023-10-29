function maskDateDDMMYYYY(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
  value = value.slice(0, 10)

  return value
}

function maskTimeHHMMSS(value: string): string {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d{2})/, '$1:$2')
  value = value.slice(0, 5)

  return value
}

export { maskDateDDMMYYYY, maskTimeHHMMSS }
