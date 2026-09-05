export const EMAIL = 'info@asesoriaxesta.com';
export const PHONE_DISPLAY = '681 083 084';
export const PHONE_TEL = '+34681083084';

const SUBJECT = 'Pack profesorado — comprobar encaje';

const BODY = `Hola,

Doy formación artística (disciplina: ).
Facturo sobre todo a academias, centros, asociaciones u otras entidades y aplico retención en la factura.
Quiero comprobar si este pack me encaja.

Nombre:
Teléfono:
`;

export const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
