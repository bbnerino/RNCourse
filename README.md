# React Native

> Flutter 와 RN 사이에서 어떤걸 배워야 하나 고민하고 있었습니다.
> (결국은 두개 다 해볼 예정이지만 ㅎㅎ) 우선은 친숙한 React를 이용할 수 있는 RN을 선택했습니다.
> JS 를 사용해서, 새로운 언어를 배울 필요가 없고, 이벤트와 상태 업데이트 형식이 React와 비슷하다는 장점이 있습니다.

# 작동 방식

1. JS 실행 환경에서 작동됩니다. Node (JS VM)에서 작동합니다.

2. 네이티브 코드 (앱) 간에 통신을 위한 "브릿지" 를 사용합니다.
   RN 에서는 네이티브 모듈을 작성하고 호출하는 방법을 제공해 , JS 코드가 네이티브 기능에 접근하고 실행할 수 있습니다.

3. 가상 DOM : React와 마찬가지로 Virtual DOM 개념을 사용해 UI 구성을 표현합니다.

4. RN은 가상 DOM 표현을 사용하며, 이 구조를 네이티브 UI 컴포넌트로 변환하고, 해당 컴포넌트를 화면에 렌더링합니다.
   ios, android 의 각각의 네이티브 UI 컴포넌트로 변환됩니다.

5. 이벤트 처리 및 상태 업데이트 : RN은 React와 마찬가지로 사용자의 입력 및 이벤트를 처리하고, 애플리케이션 상태의 변화에 따라 UI 업데이트를 합니다. 이 업데이트는 V-DOM 을 통해 자동으로 감지되고 반영됩니다.

# 프로젝트 시작하기

### Expo

Expo 는 RN 을 기반으로 한 오픈 소스 플랫폼입니다.
Xcode 와 Android studio 와 같은 별도의 개발 도구 설정 없이 Expo CLI 를 사용해 프로젝트를 실행할 수 있습니다.

기기 기능을 활용할 수 있는 기능도 제공합니다.

- expo 설치
  `npm install -g expo-cli`

- 프로젝트 시작
  `expo init GuessNumber`

  - blank (TypesScript) 선택

- android studio 설치

  - 실행 후 More Actions > VDM > Pixel 5 추천

- Xcode 설치

  - Finder > xcode > contents > developer > application > simulator

- 프로젝트 실행
  `npm start`

  - I > ios
  - A > android 실행 가능

- QR 코드 > 휴대폰에서 Expo go 설치 하고 찍으면 휴대폰에서 실행 가능

# 기능 설명

### `<View/>`

`<div/>` 와 비슷한 기능이라고 생각하면 될 것 같습니다.

### `<Text/>`

`<p>` 태그와 비슷한 기능입니다.
하지만! 다른점이 있다면, 글을 적을 때 무조건 이 태그 안에 적어야 합니다.

### style 주는 방법

CSS 를 적용할 수 없습니다. 대신 RN이 이해할 수 있게 StyleSheet 을 적용해야 스타일이 변경됩니다.

```js
<View style={styles.container}>;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
```

background-color => backgroundColor 처럼 카멜 케이스로 사용해야 합니다.
`styles = [styles.buttonInnerContainer, styles.pressed]` 와 같이 사용하면, 여러 스타일을 사용할 수 있습니다.

### `<Button/>`

하지만 버튼 태그는 스타일이 어렵습니다. 그래서 직접 커스텀 버튼을 만들어서 많이 사용합니다.
onClick 대신 onPress 를 이용해서 이벤트 핸들러를 설정합니다.

### `<Image/>`

`source={require("./assets/images/js.png")}` 를 통해 사진을 불러옵니다.

### 모달

`<Modal>` 태그를 이용해서 사용하며
`<Modal visible={isAddMode} animationType="fade">`

- visible 을 이용해서 on/off 를 설정합니다.
- animationType 으로 효과를 설정할 수 있습니다.

### 스크롤 가능한 목록

`ScrollView` 를 이용하면, 스크롤 가능한 컴포넌트가 만들어집니다.

`<FlatList/>` 를 이용하면 스크롤이 가능한 list 형태의 컴포넌트가 만들어집니다.

```js
<FlatList
  data={goals}
  renderItem={(item) => (
    <GoalItem deleteGoalHandler={deleteGoalHandler} item={item} />
  )}
/>
```

- data : 표시할 데이터 배열을 지정합니다.
- renderItem: 각 항목을 어떻게 렌더링할지를 정의하는 콜백 함수를 설정합니다.

### 영역 터치

일반 태그들은 터치가 가능하지 않습니다.

`<Pressable/>` 을 이용해서 터치가 가능하게 합니다.

```js
<Pressable
  style={({ pressed }) => pressed && styles.pressed}
  onPress={() => deleteGoalHandler(item.item.id)}
  android_ripple={{ color: "#eaf323" }}
  >
```

- onPress 로 터치 이벤트를 만들어줍니다.
- `android_ripple` : 안드로이드는 터치 이벤트를 설정해줄 수 있지만, Ios 는 아래와 같이 만들어야 합니다.
- style 태그에서, props로 pressed 는 컴포넌트의 눌림 여부를 확인할 수 있습니다.
  - 그에 따라서 스타일을 변경시킬 수 있습니다.

### 가로모드

app.json 파일에서
`"orientation": "portrait"` 이 값은 세로 고정입니다.
이 값을 default 로 바꿔주게 되면 세로 모드가 가능해집니다.

`KeyboardAvoidingView` 를 이용하면, 키보드가 영역을 가리지 않게 합니다.

`const { width, height } = useWindowDimensions();`
`useWindowDimensions` 를 이용하면 현재 가로와 세로 크기를 알 수 있어, 어떤 모드인지 확인할 수 있습니다.
이에 따라 크기를 변경 시키던지 할 수 있습니다.

### lineargradient + 이미지 배경화면

```js
<LinearGradient colors={["#d674a5", "#8124c8"]} style={styles.rootScreen}>
  <ImageBackground
    source={require("./assets/images/game.png")}
    resizeMode="cover"
    imageStyle={styles.backgroundImage}
  >
    <SafeAreaView>{screen}</SafeAreaView>
  </ImageBackground>
</LinearGradient>
```

expo-linear-gradient를 설치한 후 (`expo install expo-linear-gradient`)

사용합니다.

`ImageBackground` 를 이용해서 사진을 불러와서 사용합니다. 사진이 전체를 감싸게 되는데, 투명하게 해서, 뒤에 배경도 보이게 해줍니다. (opacity)

`SafeAreaView` : 베젤 영역을 피해서 렌더링하게 해줍니다.
