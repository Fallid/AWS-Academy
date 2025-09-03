/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  owner,
  created_at,
  updated_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  owner,
  createdAt: created_at,
  updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
