describe("텍스트 매니저입니다.", () => {
  const textManager = new TextManager();

  it("텍스트값을 전달합니다", () => {
    const initValue = textManager.getValue();

    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다.", () => {
    const testValue = { data: "Hello Zebras!" };
    textManager.setValue(testValue);

    expect(textManager.getValue()).toBe(testValue.data);
  });
});
