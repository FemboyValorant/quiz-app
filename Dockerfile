FROM openjdk:17-jdk-slim AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build target/*.jar quiz-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "quiz-app.jar"]