FROM cypress/included:3.8.1

COPY --chown=1000 ./test /test

WORKDIR /test
RUN yarn install
ENTRYPOINT []
CMD ["cypress", "run"]
