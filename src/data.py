import pandas as pd
import numpy as np
import json

# keyword.csv 불러오기
df = pd.read_csv('keyword.csv', encoding='utf-8') # 'utf-8' 인코딩 방식으로 데이터프레임 읽기 
df.set_index('Unnamed: 0', inplace=True) # 'Unnamed: 0' 열을 인덱스로 설정
df_transposed = df.T # 행과 열을 바꾸기
df_transposed.to_csv('Transposed_keyword.csv', encoding='utf-8', index=False) # 변형된 데이터프레임을 새로운 CSV 파일로 저장
df = pd.read_csv('keyword.csv', encoding='utf-8') # 'utf-8' 인코딩 방식으로 데이터프레임 읽기
# print(df)

# 선택한 키워드들을 입력
selected_attributes = ['산책'] # keyword input

#키워드 입력받기 (while 루프 이용)
# def get_input_list():
#     values_list = []
#     while True:
#         value = input() # 값들을 입력
#         if value.lower() == 'exit': # 키워드 입력 끝났음('확인'버튼)
#             break                   # '확인'버튼은 저장 안됨
#         values_list.append(value)   # 입력된 키워드들을 list에 저장
#     return values_list

# selected_attributes = get_input_list() #입력된 키워드들이 저장되는 리스트

# 선택한 속성들의 수치 합을 계산
df['합계'] = df[selected_attributes].sum(axis=1)

# 수치 합을 기준으로 데이터프레임을 내림차순으로 정렬
sorted_df = df.sort_values(by='합계', ascending=False)
top_3_parks = sorted_df.head(3).index.tolist() # 상위 3개의 공원을 출력
top_3_parks = np.array(sorted_df.iloc[:3, 0]).tolist()

# 예제용 DataFrame 생성
# df = pd.DataFrame(top_3_parks)

#=======================================================================================================

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# CORS 설정: 모든 도메인으로부터 요청을 허용합니다. (실제 운영에서는 더 정확한 제한이 필요합니다)
CORS(app)

# 또는 특정 도메인만 허용하려면 아래와 같이 origins 매개변수를 사용합니다.
# CORS(app, origins="http://allowed-domain.com")

@app.route('/data', methods=['GET'])
def get_data():
    # DataFrame을 JSON 형식으로 변환
    data = []
    for i, park in enumerate(top_3_parks, start=1):
        # entry = {"rank": i, "park": park}
        entry = {"park": park}
        data.append(entry)
        print(data)
    json_data = json.dumps(data) # JSON 데이터 출력
    # print(json_data)
    return json_data

if __name__ == '__main__':
    app.run(debug=True, port=8000)