/// <reference path="../pb_data/types.d.ts" />
// Create collection for expense types
migrate((db) => {
  const dao = new Dao(db);
  const expenseTypes = new Collection({
    name: "expense_types",
    type: "base",
    listRule:   "@request.auth.id != ''",
    viewRule:   "@request.auth.id != ''",
    createRule: "@request.auth.id != ''",
    updateRule: null,
    deleteRule: null,
    schema:     [
        {
            name:     "type",
            type:     "text",
            required: true,
            options:  {
                min: 1,
            },
        },
    ],
    indexes: [
        "CREATE UNIQUE INDEX idx_expense_type ON expense_types (type)"
    ],
    options: {}
  });
  dao.saveCollection(expenseTypes);
  dao.saveRecord(new Record(expenseTypes, { "type": "Investment" }));
  dao.saveRecord(new Record(expenseTypes, { "type": "Subscription" }));
}, (db) => {
  const dao = new Dao(db);
  const expenseTypes = dao.findCollectionByNameOrId("expense_types");
  dao.deleteCollection(expenseTypes);
})
