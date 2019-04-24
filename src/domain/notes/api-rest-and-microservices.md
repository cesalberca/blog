---
title: API Rest and Microservices
date: 2019-04-24
locale: en
---

# Contexto

- Reunión mensual
- Los temas a tratar serán diversos
- Cada participante realizará un documento
- Habrá una persona responsable de realizar un documento común

Quieren modelar la posibilidad de definir las preferencias de los usuarios para mandar notificaciones. Principalmente permisos y roles.

Hay un documento PPT donde definían una serie de cajas negras que se deben comunicar entre ellos. En principio son servicios, no se ha hablado de microservicios en ningún momento.

La parte de Notications es la parte nueva. La parte antigua es la parte de seguridad (GDPR).

En banca se debe guardar el acuso de recibo. El caso de ING es simplemente el envío de la notificación.

- Perfil: es la forma que tiene de identificar a una persona. Una persona puede tener varios perfiles.
- Means: la forma que se autentica. No es el identificador del contact point.
- Contact point: requieren tokens, que son de Google. Son necesarios identificar con un usuario. Se usa con el mobile means agreement. Puede ser un email, un número de teléfono.
- Mobile Means Agreement: el móvil identifica el contact point.
- Electronic address: API que también identifica el contact point.
- Party ID: persona física.


GCM se queda obsoleto. Están ya trabajando con un API en Swagger. El contact point se está diseñando. Se requiere que se implemente por el equipo de Álvaro. Tienen duda de si se usa el means agreemenent o un ID.

David comenta que no se debería saber qué tipo de identificador se está usando.

Ángel dice que debería trabajar con su dominio. El identificador debería ser opaco e interno, dentro del API.

Contacts point va a tratar con más tipos.

Álvaro defiende que se mete al API de preferencias por preferencias en vez de contact point.


Alejandro comenta que para ser API REST se debería poner en la URL como query params.


                    Contact Point
                    
              -------------------------
              |            |          |
            Push        Email     Telephone
            
            
Propuesta API:

`GET`: `/contactpoint/`
`GET`: `/contactpoint/[?type=push]`
`GET`: `/contactpoint/{id}/`
`PUT`: `/contactpoint/{id}/?status={on/off}`
`POST`: `/contactpoint/`
`POST`: `/contactpoint/{id}/preferences`
`DELETE`: `/contactpoint/{id}/`
`PATCH`: `/contactpoint/{id}/`
`PATCH`: `/contactpoint/{id}/preferences`


## APIs REST

¿Qué pasa cuando un alias es el identificador? Se debería borrar y crear uno nuevo con el nuevo alias.
