package mx.edu.utez.controller;

import mx.edu.utez.model.game.DaoGames;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ServletGame", value = "/ServletGame")
public class ServletGame extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("ListGames", new DaoGames().findAll());
        request.getRequestDispatcher("/views/mage/games.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
