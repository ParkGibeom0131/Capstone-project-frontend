{
    "target": [
        {
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "target_name": "./helloWorld",

            # 여기서 타겟 소스파일을 지정한다.
            "source": ["helloWorld.cpp"],
            "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"]
        }
    ]
}
