const findEliminateEmail = (array: string[]): string[] => {
    let uniqueEmails = Array.from(new Set(array))
    let result: string[] = []

    uniqueEmails.forEach(email => {
        let fullName = email.split('@')[0]
        let [firstName, lastName] = fullName.split('.'); 

        
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

        let message = `Hello ${firstName} ${lastName} Thank you for being part of our community`
        result.push(`Email: ${email} message: ${message}`)
    })
    return result
}

const emails = [
    'ana.smith@gmail.com',
    'juan.perez@yahoo.com',
    'maria.garcia@hotmail.com',
    'ana.smith@gmail.com',
    'carlos.lopez@gmail.com',
    'maria.garcia@hotmail.com',
    'laura.martinez@outlook.com'

]
console.log(findEliminateEmail(emails))