# react-bitrix24

Библиотека react-компонентов в стилистике Bitrix24

## Установка

```nodejs
npm i -S react-bitrix24@latest bitrix24-library@latest
```

## Подключение
```tsx
// App.tsx
import { BxButton, loadStyles } from 'react-bitrix24';
import Bitrix24 from 'bitrix24-library';

function App() {
  Bitrix24.init().then((BX24) => {
    loadStyles(BX24);
  });

  return (
    <BxButton menu>BxButton</BxButton>
  );
}
```

## Компоненты

### [Storybook](https://astrotrain55.github.io/react-bitrix24/)

* BxAlert
* BxButton
* BxCheckbox
* BxEntitySelector
* BxIcon
* BxInput
* BxInputFile
* BxProgressbar
* BxRadio
* BxTextarea

## Ссылки

* [vue-bitrix24](https://www.npmjs.com/package/vue-bitrix24)
* [bitrix24-library](https://www.npmjs.com/package/bitrix24-library)
* [bitrix24-create-app](https://www.npmjs.com/package/bitrix24-create-app)
* [bitrix24-stickerpack-app](https://github.com/astrotrain55/bitrix24-stickerpack-app)


* [UI-библиотека](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)
* [Create a Component Library Fast🚀(using Vite's library mode)](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
