#!/usr/bin/env python3
import json, urllib.request
from io import BytesIO
from pathlib import Path
from PIL import Image,ImageOps
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'scripts/place_image_manifest.json').read_text())
out=root/'public/places'; out.mkdir(parents=True,exist_ok=True)
headers={'User-Agent':'Mozilla/5.0','Referer':'https://www.baidu.com/'}
failed=[]
for key,(url,page) in data.items():
  try:
    req=urllib.request.Request(url,headers=headers)
    raw=urllib.request.urlopen(req,timeout=30).read()
    im=Image.open(BytesIO(raw)).convert('RGB')
    if min(im.size)<200: raise ValueError(str(im.size))
    ImageOps.fit(im,(640,640),method=Image.Resampling.LANCZOS).save(out/f'{key}.jpg','JPEG',quality=84,optimize=True)
    print('OK',key,im.size,flush=True)
  except Exception as e:
    failed.append(key); print('FAIL',key,e,flush=True)
(out/'sources.json').write_text(json.dumps({k:{'source':v[0],'page':v[1]} for k,v in data.items()},ensure_ascii=False,indent=2))
print('FAILED',failed)
raise SystemExit(bool(failed))
