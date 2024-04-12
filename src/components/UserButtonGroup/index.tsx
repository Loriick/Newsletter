import { Button, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
} from "@/mocks/user";
import { isSubscriptionEqual } from "@/utils/isSubcriptionEqual";
import { Subscriptions } from "@/utils/type";

type UserButtonGroupProps = {
  setSubscriptions: Dispatch<SetStateAction<Subscriptions>>;
  subscriptions: Subscriptions;
};

export function UserButtonGroup({
  setSubscriptions,
  subscriptions,
}: UserButtonGroupProps) {
  const handleChangeUserWithOneSubcription = () =>
    setSubscriptions(USER_WITH_ONE_SUBSCRIPTION.subscriptions);

  const handleChangeUserWithoutSubcription = () =>
    setSubscriptions(USER_WITHOUT_SUBSCRIPTION.subscriptions);

  const handleChangeUserWithMultipleSubcriptions = () =>
    setSubscriptions(USER_WITH_MULTIPLE_SUBSCRIPTION.subscriptions);

  return (
    <Stack display="flex" flexDirection={["column", "row"]}>
      <Button
        isActive={isSubscriptionEqual(
          subscriptions,
          USER_WITH_ONE_SUBSCRIPTION.subscriptions
        )}
        onClick={handleChangeUserWithOneSubcription}
        colorScheme="teal"
      >
        User with one subscription
      </Button>
      <Button
        isActive={isSubscriptionEqual(
          subscriptions,
          USER_WITHOUT_SUBSCRIPTION.subscriptions
        )}
        onClick={handleChangeUserWithoutSubcription}
        colorScheme="teal"
      >
        User without subscription
      </Button>
      <Button
        isActive={isSubscriptionEqual(
          subscriptions,
          USER_WITH_MULTIPLE_SUBSCRIPTION.subscriptions
        )}
        onClick={handleChangeUserWithMultipleSubcriptions}
        colorScheme="teal"
      >
        User with multiple subscriptions
      </Button>
    </Stack>
  );
}
