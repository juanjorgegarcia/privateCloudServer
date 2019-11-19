import { Request, Response } from "express";
import { TaskController } from "../controllers/crmController";

export class Routes {
  public taskController: TaskController = new TaskController();
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    app.route("/healthcheck").get((req: Request, res: Response) => {
      res.sendStatus(200);
    });

    // Task
    app
      .route("/task")
      // GET endpoint
      .get(this.taskController.getTasks)
      .post(this.taskController.addNewTask);
    // POST endpoint
    // Create a new contact

    // task detail
    app
      .route("/task/:taskId")
      .get(this.taskController.getTaskWithID)
      .put(this.taskController.updateTask)
      .delete(this.taskController.deleteTask);
  }
}
