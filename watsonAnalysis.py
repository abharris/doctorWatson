import json
from ibm_watson import ToneAnalyzerV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import sys

inFile = sys.argv[1]
outFile = sys.argv[2]

authenticator = IAMAuthenticator('iweYZsIV-pQsMI7dKIDW1vCd7cjdBb7aFQvV77ko_6EQ')
tone_analyzer = ToneAnalyzerV3(
    version='2020-05-21',
    authenticator=authenticator
)

tone_analyzer.set_service_url('https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/e81c57b7-0a33-4905-b8e9-7a50af9dd09d')

with open(inFile, 'r') as text_file:
    text = str(text_file.read())
    print(text)
    tone_analysis = tone_analyzer.tone(
        {'text': text},
        content_type='application/json'
    ).get_result()
    print(json.dumps(tone_analysis, indent=2))
    with open(outFile, 'w') as outfile:
        json.dump(tone_analysis, outfile)
