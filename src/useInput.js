import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        let willUpdate = true;

        // validator는 함수이므로 if문 실행
        if (typeof validator === "function") {
            willUpdate = validator(value); // value의 유효성 검증
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

export default useInput;