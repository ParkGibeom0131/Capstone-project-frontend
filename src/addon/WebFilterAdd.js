import styled from "styled-components";
import Button from "../components/auth/Button";
import React, { useState } from "react";
import routes from "../routes";
import FormBox from './../components/auth/FormBox';
import Input from './../components/auth/Input';
import { gql, useMutation } from "apollo-server";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";

const Wrap = styled.div`
    background-color: #323232;
    padding-top: 70px;
`;

const SButton = styled.div`
    margin-top: 20px;
    padding: 5px;
`;

const CREATE_WEBFILTER_MUTATION = gql`
    mutation createWebfilter(
        $FstInstance: String!
        $SndInstance: Int!
        $TrdInstance: Int!
    ) {
        createWebfilter(
            FstInstance: $FstInstance
            SndInstance: $SndInstance
            TrdInstance: $TrdInstance
        ) {
            ok
            error
        }
    }
`;

function WebFilterAdd() {
    const navigate = useNavigate();
    const onCompleted = (data) => {
        const { createWebfilter: { ok, }, } = data;
        if (!ok) {
            return;
        }
        navigate(routes.home, {
            message: "Webfilter Info created...",
        });
    }
    const [createWebfilter, { loading }] = useMutation(CREATE_WEBFILTER_MUTATION, {
        onCompleted,
    });
    const {
        register,
        handleSubmit,
        errors,
        formState,
    } = useForm({
        mode: "onChange",
    });
    const onSubmitValid = (data) => {
        if (loading) {
            return;
        }
        createWebfilter({
            variables: {
                ...data,
            },
        });
    };
    return (
        <Wrap>
            <FormBox>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input {...register('FirstInstance', {
                        required: "FirstInstance is Required.",
                    })}
                        name="FirstInstance"
                        type="text"
                        placeholder="데이터셋 파일이 존재하는 경로를 첫번째 인자에 입력해주세요."
                    />
                    <FormError message={formState.errors?.FirstInstance?.message} />
                    <Input {...register('SecondInstance', {
                        required: "SecondInstance is Required.",
                    })}
                        name="SecondInstance"
                        type="text"
                        placeholder="캡처할 카메라 번호를 두번째 인자에 입력해주세요."
                    />
                    <FormError message={formState.errors?.lastName?.message} />
                    <Input {...register('ThirdInstance', {
                        required: "ThirdInstance is Required.",
                    })}
                        name="ThirdInstance"
                        type="text"
                        placeholder="개인정보 필터링 방법 번호를 세번째 인자에 입력해주세요."
                    />
                    <FormError message={formState.errors?.lastName?.message} />
                    <SButton>
                        <Button
                            type="submit"
                            value={loading ? "로딩중..." : "실행"}
                        />
                    </SButton>
                </form>
            </FormBox>
        </Wrap>
    );
}

export default WebFilterAdd;