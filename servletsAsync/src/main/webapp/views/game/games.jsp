<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="context" value="${pageContext.request.contextPath}"></c:set>
<html>

<head>
  <title>Games</title>
  <link href="${context}/assets/bootstrap/css/bootstrap.css" rel="stylesheet">
</head>

<body onload="loadContent()">
  <div class="container mt-5">
    <button class="btn btn-primary" onclick="loadContent()">Recargar</button>
    <button class="btn btn-success">Agregar juego</button>
    <h3 class="mt-3">Videojuegos</h3>
    <div id="content">

    </div>
  </div>

  <script src="${context}/assets/bootstrap/js/bootstrap.bundle.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
  <script src="${context}/assets/dist/main.js"></script>
</body>

</html>