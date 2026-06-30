# Google Analytics 4

## Estado

| Entorno | Variable | Valor |
|---------|----------|-------|
| Producción (Vercel) | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-0C6V3MFHHE` |
| Local | `.env.local` (misma variable) | Copiar desde `.env.example` |

El script de GA4 se carga en `app/layout.tsx` solo si el ID es válido (`G-…`).

## Verificar que funciona

1. Entrá a [Google Analytics](https://analytics.google.com/) → propiedad **Ausland Aventuras** (o la que tenga ese flujo).
2. **Informes → Tiempo real**: abrí `https://www.auslandaventuras.com` en otra pestaña; deberías ver 1 usuario activo.
3. Hacé clic en cualquier botón de WhatsApp.
4. En Tiempo real → **Evento por nombre de evento**, buscá `whatsapp_click`.

## Evento personalizado `whatsapp_click`

Se dispara desde `lib/analytics.ts` en cada CTA de WhatsApp:

| Parámetro | Valores |
|-----------|---------|
| `location` | `header`, `fab`, `footer`, `card`, `detail`, `nosotros`, `experiencias` |
| `destination` | slug del destino (opcional; en cards y detalle) |

### Marcar como conversión (recomendado)

En GA4: **Administrar → Eventos → Crear evento** o, si ya aparece tras unos clics:

1. **Administrar → Conversiones**
2. **Nuevo evento de conversión**
3. Nombre: `whatsapp_click`

Así podés medir consultas reales además de visitas.

## Desarrollo local

```bash
# .env.local (no se commitea)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-0C6V3MFHHE
```

Reiniciá `npm run dev` después de cambiar variables. Los eventos locales aparecen en Tiempo real mezclados con producción; para filtrar, usá la dimensión de hostname o un flujo de datos de prueba aparte.

## Vercel

Si hay que reconfigurar:

1. Proyecto en Vercel → **Settings → Environment Variables**
2. `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-0C6V3MFHHE`
3. Ambientes: Production (y Preview si querés métricas en previews)
4. Redeploy
