export const AddConnections = ({ platforms }) => {
  if (!platforms) return null;

  return (
    <>
      {platforms.map((platform) => (
        <Card
          title={`Add ${platform.name} Connection`}
          href={`https://app.picaos.com/connections#open=${platform.code}`}
          arrow="true"
          key={platform.code}
        >
        </Card>
      ))}
    </>
  );
}
