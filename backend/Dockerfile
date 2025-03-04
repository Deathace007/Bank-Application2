FROM python

WORKDIR /tree
ADD . .

ENTRYPOINT [ "python" ]

CMD [ "/tree/initialize_db.py", "/tree/app.py" ]