import { CustomNotFoundException, CustomisableException } from "./custom.exeptions";

export enum ActionResult {
    Success = 'SUCCESS',
    UserNotFound = 'USER_NOT_FOUND',
    AthleteNotFound = 'ATHLETE_NOT_FOUND',
    NoChangeNeeded = 'NO_CHANGE_NEEDED',
    NotOwner = 'CURRENT_USER_IS_NOT_OWNER',
    NotSaved = 'CHANGES_NOT_SAVED',
    NotCreated = 'NOT_CREATED',
    NotDeleted = 'NOT_DELETED',
  }

  export function handleActionResult(result: ActionResult) {
    if (!Object.values(ActionResult).includes(result)) {
      return;
    }
    switch (result) {
      case ActionResult.Success:
        break;
      case ActionResult.NoChangeNeeded:
        break;

      case ActionResult.AthleteNotFound:
        throw new CustomNotFoundException('athlete');

      case ActionResult.UserNotFound:
        throw new CustomNotFoundException('user');
  
      case ActionResult.NotOwner:
        throw new CustomisableException(
          'not owner',
          'users cannot change data unless they are the owner',
          403,
        );

  
      case ActionResult.NotCreated:
        throw new CustomisableException(
          "can't create",
          'failed to create new doccument',
          500,
        );
      case ActionResult.NotSaved:
        throw new CustomisableException(
          "can't save",
          'failed to save changes',
          500,
        );
      case ActionResult.NotDeleted:
        throw new CustomisableException("can't delete", 'failed to delete', 500);
  
      default:
        throw new CustomisableException(
          'unexpected',
          'An unexpected error occurred',
          400,
        );
    }
  }