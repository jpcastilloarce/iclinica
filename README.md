
# iClínica

iClínica es una aplicación móvil para consultas médicas en línea, diseñada para proporcionar un diagnóstico preliminar basado en los síntomas del paciente.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```sh
   git clone https://github.com/jpcastilloarce/iclinica.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd tu-repositorio
   ```

3. Instala las dependencias del proyecto:

   ```sh
   npm install
   ```

4. Limpia la caché de npm (opcional):

   ```sh
   npm cache clean --force
   ```

## Uso

Para iniciar la aplicación, ejecuta:

```sh
npm start
```

Esto iniciará el servidor de desarrollo de Expo. Puedes abrir la aplicación en un emulador de Android/iOS o en un dispositivo físico usando la aplicación Expo Go.

## Estructura del Proyecto

```plaintext
/root
  ├── app/
  │   ├── screens/
  │   │   ├── About.jsx
  │   │   ├── AditionalInfo.jsx
  │   │   ├── BasicInfo.jsx
  │   │   ├── DoctorInfo.jsx
  │   │   ├── Index.jsx
  │   │   ├── Questions.jsx
  │   │   ├── ReasonInfo.jsx
  │   │   ├── ResultInfo.jsx
  │   │   ├── RiskInfo.jsx
  │   │   ├── SymptomsInfo.jsx
  │   ├── _layout.jsx
  ├── components/
  │   ├── Button.jsx
  │   ├── Icons.jsx
  │   ├── Screen.jsx
  ├── contexts/
  │   ├── PatientContext.jsx
  ├── lib/
  │   ├── iclinicaApi.jsx
  ├── assets/
  ├── App.js
  ├── index.js
  ├── package.json
  ├── .gitignore
  ├── .eslintrc.js
  ├── app.json
```

### Descripción de los archivos

- **App.js**: El archivo principal de la aplicación.
- **index.js**: Punto de entrada de la aplicación configurado para usar Expo Router.
- **app/screens/**: Directorio que contiene todos los componentes de las pantallas de la aplicación.
- **app/_layout.jsx**: Archivo de configuración de las rutas de la aplicación.
- **components/**: Directorio que contiene los componentes reutilizables.
- **contexts/**: Directorio que contiene los contextos de React para el manejo de estados globales.
- **lib/**: Directorio que contiene funciones y configuraciones auxiliares, como la comunicación con APIs.
- **assets/**: Directorio que contiene los archivos estáticos, como imágenes y fuentes.

## Dependencias

- **expo**: Framework para desarrollar aplicaciones móviles con React Native.
- **expo-router**: Biblioteca para manejar la navegación en la aplicación.
- **react**: Biblioteca para construir interfaces de usuario.
- **react-native**: Framework para desarrollar aplicaciones móviles nativas con React.
- **react-native-safe-area-context**: Manejador de contextos seguros para dispositivos móviles.
- **react-navigation**: Biblioteca para manejar la navegación en la aplicación.
- **react-native-body-highlighter**: Biblioteca para resaltar partes del cuerpo en la aplicación.
- **@react-native-community/slider**: Componente deslizante para seleccionar valores.
