##Run after the server code is Running
##for this you need to install (pip install requests)
import requests
##url= https://github.com/Er-akash/Python_Request-Module
url = 'http://192.168.0.122:3001/'  ##ip address of your another Machine so that you can establish connection


payload = {'some':'data'}

r = requests.post(url,json = payload)
print(r.text)
print(r.status_code)
