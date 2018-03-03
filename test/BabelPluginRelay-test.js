// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`BabelPluginRelay \`development\` option does not test the hash when \`development\` is not set 1`] = `
"({
  data: function () {
    return require(\\"./__generated__/TestFrag.graphql\\");
  }
});"
`;

exports[`BabelPluginRelay \`development\` option tests the hash when \`development\` is set 1`] = `
"({
  data: function () {
    const node = require(\\"./__generated__/TestFrag.graphql\\");

    if (node.hash && node.hash !== \\"0bb6b7b29bc3e910921551c4ff5b6757\\") {
      console.error(\\"The definition of 'TestFrag' appears to have changed. Run \`relay-compiler\` to update the generated files to receive the expected data.\\");
    }

    return require(\\"./__generated__/TestFrag.graphql\\");
  }
});"
`;

exports[`BabelPluginRelay \`development\` option tests the hash when \`isDevVariable\` is set 1`] = `
"({
  data: function () {
    if (IS_DEV) {
      const node = require(\\"./__generated__/TestFrag.graphql\\");

      if (node.hash && node.hash !== \\"0bb6b7b29bc3e910921551c4ff5b6757\\") {
        console.error(\\"The definition of 'TestFrag' appears to have changed. Run \`relay-compiler\` to update the generated files to receive the expected data.\\");
      }
    }

    return require(\\"./__generated__/TestFrag.graphql\\");
  }
});"
`;

exports[`BabelPluginRelay \`development\` option uses a custom build command in message 1`] = `
"({
  data: function () {
    const node = require(\\"./__generated__/TestFrag.graphql\\");

    if (node.hash && node.hash !== \\"0bb6b7b29bc3e910921551c4ff5b6757\\") {
      console.error(\\"The definition of 'TestFrag' appears to have changed. Run \`relay-build\` to update the generated files to receive the expected data.\\");
    }

    return require(\\"./__generated__/TestFrag.graphql\\");
  }
});"
`;

exports[`BabelPluginRelay matches expected output: argsInvalidValues.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query Args {
    node(id: 123) {
      ... on User {
        friends(
          first: "10"
          orderby: Name
          find: cursor1
          isViewerFriend: "true"
          gender: "MALE"
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: GraphQL Validation Error: Expected type Int, found "10".
>
>           first: "10"
>                  ^^^
GraphQL Validation Error: Expected type [String], found Name.
>
>           orderby: Name
>                    ^^^
GraphQL Validation Error: Expected type String, found cursor1.
>
>           find: cursor1
>                 ^^^
GraphQL Validation Error: Expected type Boolean, found "true".
>
>           isViewerFriend: "true"
>                           ^^^
GraphQL Validation Error: Expected type Gender, found "MALE"; Did you mean the enum value MALE or FEMALE?
>
>           gender: "MALE"
>                   ^^^
`;

exports[`BabelPluginRelay matches expected output: argsSubstitution.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query Args {
    node(id: \${userID}) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function (RQL_0) {
  return {
    calls: [{
      kind: "Call",
      metadata: {
        type: "ID!"
      },
      name: "id",
      value: Relay.QL.__var(RQL_0)
    }],
    children: [{
      fieldName: "id",
      kind: "Field",
      metadata: {
        isRequisite: true
      },
      type: "String"
    }, {
      fieldName: "__typename",
      kind: "Field",
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: "String"
    }],
    fieldName: "node",
    kind: "Query",
    metadata: {
      isAbstract: true,
      identifyingArgName: "id",
      identifyingArgType: "ID!"
    },
    name: "Args",
    type: "Node"
  };
}(userID);
`;

exports[`BabelPluginRelay matches expected output: argsValues.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query Args {
    node(id: 123) {
      ... on User {
        friends(
          first: 10
          orderby: "Name"
          find: "cursor1"
          isViewerFriend: true
          gender: MALE
        ) {
          edges {
            node {
              id
              firstName(if: true, unless: false)
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function () {
  return {
    calls: [{
      kind: "Call",
      metadata: {
        type: "ID!"
      },
      name: "id",
      value: {
        kind: "CallValue",
        callValue: 123
      }
    }],
    children: [{
      fieldName: "id",
      kind: "Field",
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: "String"
    }, {
      fieldName: "__typename",
      kind: "Field",
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: "String"
    }, {
      children: [{
        calls: [{
          kind: "Call",
          metadata: {
            type: "Int"
          },
          name: "first",
          value: {
            kind: "CallValue",
            callValue: 10
          }
        }, {
          kind: "Call",
          metadata: {},
          name: "orderby",
          value: {
            kind: "CallValue",
            callValue: "Name"
          }
        }, {
          kind: "Call",
          metadata: {},
          name: "find",
          value: {
            kind: "CallValue",
            callValue: "cursor1"
          }
        }, {
          kind: "Call",
          metadata: {},
          name: "isViewerFriend",
          value: {
            kind: "CallValue",
            callValue: true
          }
        }, {
          kind: "Call",
          metadata: {
            type: "Gender"
          },
          name: "gender",
          value: {
            kind: "CallValue",
            callValue: "MALE"
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: "id",
              kind: "Field",
              metadata: {
                isRequisite: true
              },
              type: "String"
            }, {
              calls: [{
                kind: "Call",
                metadata: {},
                name: "if",
                value: {
                  kind: "CallValue",
                  callValue: true
                }
              }, {
                kind: "Call",
                metadata: {},
                name: "unless",
                value: {
                  kind: "CallValue",
                  callValue: false
                }
              }],
              fieldName: "firstName",
              kind: "Field",
              metadata: {},
              type: "String"
            }],
            fieldName: "node",
            kind: "Field",
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: "node",
              inferredPrimaryKey: "id",
              isRequisite: true
            },
            type: "User"
          }, {
            fieldName: "cursor",
            kind: "Field",
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: "String"
          }],
          fieldName: "edges",
          kind: "Field",
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: "UserConnectionEdge"
        }, {
          children: [{
            fieldName: "hasNextPage",
            kind: "Field",
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: "Boolean"
          }, {
            fieldName: "hasPreviousPage",
            kind: "Field",
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: "Boolean"
          }],
          fieldName: "pageInfo",
          kind: "Field",
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: "PageInfo"
        }],
        fieldName: "friends",
        kind: "Field",
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: "UserConnection"
      }, {
        fieldName: "id",
        kind: "Field",
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: "String"
      }],
      id: Relay.QL.__id(),
      kind: "Fragment",
      metadata: {},
      name: "User",
      type: "User"
    }],
    fieldName: "node",
    kind: "Query",
    metadata: {
      isAbstract: true,
      identifyingArgName: "id",
      identifyingArgType: "ID!"
    },
    name: "Args",
    type: "Node"
  };
}();
`;

exports[`BabelPluginRelay matches expected output: argsVariablesList.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query Args {
    nodes(ids: [$one, $two, 3]) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function () {
  return {
    calls: [{
      kind: "Call",
      metadata: {
        type: "[ID!]"
      },
      name: "ids",
      value: [{
        kind: "CallVariable",
        callVariableName: "one"
      }, {
        kind: "CallVariable",
        callVariableName: "two"
      }, {
        kind: "CallValue",
        callValue: 3
      }]
    }],
    children: [{
      fieldName: "id",
      kind: "Field",
      metadata: {
        isRequisite: true
      },
      type: "String"
    }, {
      fieldName: "__typename",
      kind: "Field",
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: "String"
    }],
    fieldName: "nodes",
    kind: "Query",
    metadata: {
      isPlural: true,
      isAbstract: true,
      identifyingArgName: "ids",
      identifyingArgType: "[ID!]"
    },
    name: "Args",
    type: "Node"
  };
}();
`;

exports[`BabelPluginRelay matches expected output: arguments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: graphql\`
    fragment CompatProfile_passing on User {
      ...ProfilePic_user @arguments(size: 40, scale: 1.5, title: "Photo")
      ...ProfilePic_user @arguments(size: $pictureSize)
    }
  \`,
  receiving: graphql\`
    fragment CompatProfile_receiving on User @argumentDefinitions(
      first: {type: "Int", defaultValue: 5}
      named: {type: "String", defaultValue: "john"}
      scale: {type: "Float", defaultValue: 1.5}
      noDefault: {type: "Int"}
    ) {
      friends(first: $first, named: $named, scale: $scale) {
        count
      }
    }
  \`,
  receivingGlobals: graphql\`
    fragment CompatProfile_receivingGlobals on User {
      friends(first: $friendsCount) {
        count
      }
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: function () {
    return require('./__generated__/CompatProfile_passing.graphql');
  },
  receiving: function () {
    return require('./__generated__/CompatProfile_receiving.graphql');
  },
  receivingGlobals: function () {
    return require('./__generated__/CompatProfile_receivingGlobals.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: graphql\`
    fragment CompatProfile_passing on User {
      ...ProfilePic_user @arguments(size: 40, scale: 1.5, title: "Photo")
      ...ProfilePic_user @arguments(size: $pictureSize)
    }
  \`,
  receiving: graphql\`
    fragment CompatProfile_receiving on User @argumentDefinitions(
      first: {type: "Int", defaultValue: 5}
      named: {type: "String", defaultValue: "john"}
      scale: {type: "Float", defaultValue: 1.5}
      noDefault: {type: "Int"}
    ) {
      friends(first: $first, named: $named, scale: $scale) {
        count
      }
    }
  \`,
  passingWithDefault: graphql\`
    fragment CompatProfile_passingWithDefault on User @argumentDefinitions(
      withDefault: {type: "Int", defaultValue: 100}
      noDefault: {type: "Int"}
    ) {
      ...ProfilePic_user @arguments(size: $withDefault, scale: $noDefault)
    }
  \`,
  receivingGlobals: graphql\`
    fragment CompatProfile_receivingGlobals on User {
      friends(first: $friendsCount) {
        count
      }
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: {
    modern: function () {
      return require('./__generated__/CompatProfile_passing.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const ProfilePic_user_args1 = ProfilePic.getFragment('user', {
        size: 40,
        scale: 1.5,
        title: 'Photo'
      }),
            ProfilePic_user_args2 = ProfilePic.getFragment('user', {
        size: {
          kind: 'CallVariable',
          callVariableName: 'pictureSize'
        }
      });
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          kind: 'RootArgument',
          name: 'pictureSize'
        }],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(ProfilePic_user_args1), RelayQL_GENERATED.__frag(ProfilePic_user_args2)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_passing',
            type: 'User'
          };
        }()
      };
    }
  },
  receiving: {
    modern: function () {
      return require('./__generated__/CompatProfile_receiving.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: 5,
          kind: 'LocalArgument',
          name: 'first'
        }, {
          defaultValue: 'john',
          kind: 'LocalArgument',
          name: 'named'
        }, {
          defaultValue: 1.5,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Int'
                },
                name: 'first',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'first'
                }
              }, {
                kind: 'Call',
                metadata: {},
                name: 'named',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'named'
                }
              }, {
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'friends',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isConnection: true,
                isFindable: true
              },
              type: 'FriendsConnection'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_receiving',
            type: 'User'
          };
        }()
      };
    }
  },
  passingWithDefault: {
    modern: function () {
      return require('./__generated__/CompatProfile_passingWithDefault.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const ProfilePic_user_args1 = ProfilePic.getFragment('user', {
        size: {
          kind: 'CallVariable',
          callVariableName: 'withDefault'
        },
        scale: {
          kind: 'CallVariable',
          callVariableName: 'noDefault'
        }
      });
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: 100,
          kind: 'LocalArgument',
          name: 'withDefault'
        }, {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'noDefault'
        }],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(ProfilePic_user_args1)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_passingWithDefault',
            type: 'User'
          };
        }()
      };
    }
  },
  receivingGlobals: {
    modern: function () {
      return require('./__generated__/CompatProfile_receivingGlobals.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          kind: 'RootArgument',
          name: 'friendsCount'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Int'
                },
                name: 'first',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'friendsCount'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'friends',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isConnection: true,
                isFindable: true
              },
              type: 'FriendsConnection'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_receivingGlobals',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: graphql\`
    fragment CompatProfile_passing on User {
      ...ProfilePic_user @arguments(size: 40, scale: 1.5, title: "Photo")
      ...ProfilePic_user @arguments(size: $pictureSize)
    }
  \`,
  receiving: graphql\`
    fragment CompatProfile_receiving on User @argumentDefinitions(
      first: {type: "Int", defaultValue: 5}
      named: {type: "String", defaultValue: "john"}
      scale: {type: "Float", defaultValue: 1.5}
      noDefault: {type: "Int"}
    ) {
      friends(first: $first, named: $named, scale: $scale) {
        count
      }
    }
  \`,
  receivingGlobals: graphql\`
    fragment CompatProfile_receivingGlobals on User {
      friends(first: $friendsCount) {
        count
      }
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: function () {
    return require('CompatProfile_passing.graphql');
  },
  receiving: function () {
    return require('CompatProfile_receiving.graphql');
  },
  receivingGlobals: function () {
    return require('CompatProfile_receivingGlobals.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: graphql\`
    fragment CompatProfile_passing on User {
      ...ProfilePic_user @arguments(size: 40, scale: 1.5, title: "Photo")
      ...ProfilePic_user @arguments(size: $pictureSize)
    }
  \`,
  receiving: graphql\`
    fragment CompatProfile_receiving on User @argumentDefinitions(
      first: {type: "Int", defaultValue: 5}
      named: {type: "String", defaultValue: "john"}
      scale: {type: "Float", defaultValue: 1.5}
      noDefault: {type: "Int"}
    ) {
      friends(first: $first, named: $named, scale: $scale) {
        count
      }
    }
  \`,
  receivingGlobals: graphql\`
    fragment CompatProfile_receivingGlobals on User {
      friends(first: $friendsCount) {
        count
      }
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  passing: {
    modern: function () {
      return require('CompatProfile_passing.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const ProfilePic_user_args1 = ProfilePic.getFragment('user', {
        size: 40,
        scale: 1.5,
        title: 'Photo'
      }),
            ProfilePic_user_args2 = ProfilePic.getFragment('user', {
        size: {
          kind: 'CallVariable',
          callVariableName: 'pictureSize'
        }
      });
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          kind: 'RootArgument',
          name: 'pictureSize'
        }],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(ProfilePic_user_args1), RelayQL_GENERATED.__frag(ProfilePic_user_args2)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_passing',
            type: 'User'
          };
        }()
      };
    }
  },
  receiving: {
    modern: function () {
      return require('CompatProfile_receiving.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: 5,
          kind: 'LocalArgument',
          name: 'first'
        }, {
          defaultValue: 'john',
          kind: 'LocalArgument',
          name: 'named'
        }, {
          defaultValue: 1.5,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Int'
                },
                name: 'first',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'first'
                }
              }, {
                kind: 'Call',
                metadata: {},
                name: 'named',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'named'
                }
              }, {
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'friends',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isConnection: true,
                isFindable: true
              },
              type: 'FriendsConnection'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_receiving',
            type: 'User'
          };
        }()
      };
    }
  },
  receivingGlobals: {
    modern: function () {
      return require('CompatProfile_receivingGlobals.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          kind: 'RootArgument',
          name: 'friendsCount'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Int'
                },
                name: 'first',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'friendsCount'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'friends',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                isConnection: true,
                isFindable: true
              },
              type: 'FriendsConnection'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_receivingGlobals',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments-listvalue.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const {graphql} = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer @argumentDefinitions(
      browserContext: {type: "MarketplaceBrowseContext", defaultValue: BROWSE_FEED}
      priceRange: {type: "[Float]", defaultValue: [0, 50]}
    ) {
      marketplace_explore(
        marketplace_browse_context: $browserContext,
        with_price_between: $priceRange,
      ) {
        count
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const { graphql } = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: function () {
    return require('./__generated__/CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments-listvalue.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const {graphql} = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer @argumentDefinitions(
      browserContext: {type: "MarketplaceBrowseContext", defaultValue: BROWSE_FEED}
      priceRange: {type: "[Float]", defaultValue: [0, 50]}
    ) {
      marketplace_explore(
        marketplace_browse_context: $browserContext,
        with_price_between: $priceRange,
      ) {
        count
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const { graphql } = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: {
    modern: function () {
      return require('./__generated__/CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: 'BROWSE_FEED',
          kind: 'LocalArgument',
          name: 'browserContext'
        }, {
          defaultValue: [0, 50],
          kind: 'LocalArgument',
          name: 'priceRange'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'MarketplaceBrowseContext'
                },
                name: 'marketplace_browse_context',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'browserContext'
                }
              }, {
                kind: 'Call',
                metadata: {
                  type: '[Float]'
                },
                name: 'with_price_between',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'priceRange'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'marketplace_explore',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'MarketplaceExploreConnection'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'Viewer'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments-listvalue.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const {graphql} = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer @argumentDefinitions(
      browserContext: {type: "MarketplaceBrowseContext", defaultValue: BROWSE_FEED}
      priceRange: {type: "[Float]", defaultValue: [0, 50]}
    ) {
      marketplace_explore(
        marketplace_browse_context: $browserContext,
        with_price_between: $priceRange,
      ) {
        count
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const { graphql } = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: function () {
    return require('CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: arguments-listvalue.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const {graphql} = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer @argumentDefinitions(
      browserContext: {type: "MarketplaceBrowseContext", defaultValue: BROWSE_FEED}
      priceRange: {type: "[Float]", defaultValue: [0, 50]}
    ) {
      marketplace_explore(
        marketplace_browse_context: $browserContext,
        with_price_between: $priceRange,
      ) {
        count
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @providesModule CompatProfile
 */

'use strict';

const RelayClassic = require('react-relay/classic');

const { graphql } = RelayClassic;

const CompatProfile = () => null;

module.exports = RelayClassic.createFragmentContainer(CompatProfile, {
  viewer: {
    modern: function () {
      return require('CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: 'BROWSE_FEED',
          kind: 'LocalArgument',
          name: 'browserContext'
        }, {
          defaultValue: [0, 50],
          kind: 'LocalArgument',
          name: 'priceRange'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'MarketplaceBrowseContext'
                },
                name: 'marketplace_browse_context',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'browserContext'
                }
              }, {
                kind: 'Call',
                metadata: {
                  type: '[Float]'
                },
                name: 'with_price_between',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'priceRange'
                }
              }],
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'marketplace_explore',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'MarketplaceExploreConnection'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'Viewer'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: connectionPattern.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on User @relay(pattern: true) {
    friends {
      edges {
        node {
          id
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      children: [{
        children: [{
          children: [{
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'node',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            inferredRootCallName: 'node',
            inferredPrimaryKey: 'id',
            isRequisite: true
          },
          type: 'User'
        }, {
          fieldName: 'cursor',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'String'
        }],
        fieldName: 'edges',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isPlural: true
        },
        type: 'UserConnectionEdge'
      }, {
        children: [{
          fieldName: 'hasNextPage',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'Boolean'
        }, {
          fieldName: 'hasPreviousPage',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'Boolean'
        }],
        fieldName: 'pageInfo',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isGenerated: true,
          isRequisite: true
        },
        type: 'PageInfo'
      }],
      fieldName: 'friends',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isConnection: true,
        isFindable: true
      },
      type: 'UserConnection'
    }, {
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      pattern: true
    },
    name: 'UnknownRelayQL',
    type: 'User'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithAfterLastArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(last: 3, after: "foo") {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Connection arguments \`friends(after: <cursor>, last: <count>)\` are not supported unless both are variables. Use \`(last: <count>)\`, \`(before: <cursor>, last: <count>)\`, \`(after: <cursor>, first: <count>)\`, or \`(after: $<var>, last: $<var>)\`.
`;

exports[`BabelPluginRelay matches expected output: connectionWithAfterLastArgsWithInlineFragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(last: 3, after: "foo") {
          ... on UserConnection {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Connection arguments \`friends(after: <cursor>, last: <count>)\` are not supported unless both are variables. Use \`(last: <count>)\`, \`(before: <cursor>, last: <count>)\`, \`(after: <cursor>, first: <count>)\`, or \`(after: $<var>, last: $<var>)\`.
`;

exports[`BabelPluginRelay matches expected output: connectionWithAfterLastOneVariableArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(last: $last, after: "foo") {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Connection arguments \`friends(after: <cursor>, last: <count>)\` are not supported unless both are variables. Use \`(last: <count>)\`, \`(before: <cursor>, last: <count>)\`, \`(after: <cursor>, first: <count>)\`, or \`(after: $<var>, last: $<var>)\`.
`;

exports[`BabelPluginRelay matches expected output: connectionWithAfterLastVariableArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(after: $after, last: $last) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {},
          name: 'after',
          value: {
            kind: 'CallVariable',
            callVariableName: 'after'
          }
        }, {
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'last',
          value: {
            kind: 'CallVariable',
            callVariableName: 'last'
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithBeforeFirstArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3, before: "foo") {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Connection arguments \`friends(before: <cursor>, first: <count>)\` are not supported unless both are variables. Use \`(first: <count>)\`, \`(after: <cursor>, first: <count>)\`, \`(before: <cursor>, last: <count>)\`, or \`(before: $<var>, first: $<var>)\`.
`;

exports[`BabelPluginRelay matches expected output: connectionWithFirstLastArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3, last: 3) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Connection arguments \`friends(first: <count>, last: <count>)\` are not supported unless both are variables. Use \`(first: <count>)\`, \`(last: <count>)\`, or \`(first: $<var>, last: $<var>)\`.
`;

exports[`BabelPluginRelay matches expected output: connectionWithFirstLastVariableArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: $first, last: $last) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallVariable',
            callVariableName: 'first'
          }
        }, {
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'last',
          value: {
            kind: 'CallVariable',
            callVariableName: 'last'
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithNodesField.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) {
          nodes {
            id
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You supplied a field named \`nodes\` on a connection named \`friends\`, but pagination is not supported on connections without using \`edges\`. Use \`friends{edges{node{...}}}\` instead.
`;

exports[`BabelPluginRelay matches expected output: connectionWithPageInfoAlias.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) {
          edges {
            node {
              name
            }
          }
          myPageInfo: pageInfo {
            hasPreviousPage
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 3
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          alias: 'myPageInfo',
          children: [{
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithPageInfoSubfields.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) {
          edges {
            node {
              name
            }
          }
          pageInfo
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 3
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithSelectVariables.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends1: friends(first: $limit) {
          edges {
            ... on UserConnectionEdge @relay(variables: []) {
              node {
                name
              }
            }
          }
        }
        friends2: friends(first: $limit) {
          edges {
            ... on UserConnectionEdge @relay(variables: ["size"]) {
              node {
                name
                profilePicture(size: $size)
              }
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        alias: 'friends1',
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallVariable',
            callVariableName: 'limit'
          }
        }],
        children: [{
          children: [{
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }, {
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isGenerated: true,
              isRequisite: true
            },
            type: 'User'
          }, Relay.QL.__createFragment({
            children: [{
              children: [{
                fieldName: 'name',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }, {
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'node',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id'
              },
              type: 'User'
            }],
            id: Relay.QL.__id(),
            kind: 'Fragment',
            metadata: {
              isTrackingEnabled: true
            },
            name: 'UserConnectionEdge',
            type: 'UserConnectionEdge'
          }, {})],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        alias: 'friends2',
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallVariable',
            callVariableName: 'limit'
          }
        }],
        children: [{
          children: [{
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }, {
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isGenerated: true,
              isRequisite: true
            },
            type: 'User'
          }, Relay.QL.__createFragment({
            children: [{
              children: [{
                fieldName: 'name',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }, {
                calls: [{
                  kind: 'Call',
                  metadata: {
                    type: 'Int'
                  },
                  name: 'size',
                  value: {
                    kind: 'CallVariable',
                    callVariableName: 'size'
                  }
                }],
                fieldName: 'profilePicture',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true
                },
                type: 'ProfilePicture'
              }, {
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'node',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id'
              },
              type: 'User'
            }],
            id: Relay.QL.__id(),
            kind: 'Fragment',
            metadata: {
              isTrackingEnabled: true
            },
            name: 'UserConnectionEdge',
            type: 'UserConnectionEdge'
          }, {
            size: {
              kind: 'CallVariable',
              callVariableName: 'size'
            }
          })],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithoutArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You supplied the \`edges\` field on a connection named \`friends\`, but you did not supply an argument necessary for Relay to handle the connection. Please specify a limit argument like \`first\`, or \`last\` or fetch a specific item with a \`find\` argument.
`;

exports[`BabelPluginRelay matches expected output: connectionWithoutArgsWithInlineFragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends {
          ... on UserConnection {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You supplied the \`edges\` field on a connection named \`friends\`, but you did not supply an argument necessary for Relay to handle the connection. Please specify a limit argument like \`first\`, or \`last\` or fetch a specific item with a \`find\` argument.
`;

exports[`BabelPluginRelay matches expected output: connectionWithoutNodeField.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) {
          edges {
            cursor
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 3
          }
        }],
        children: [{
          children: [{
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'String'
          }, {
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isGenerated: true,
              isRequisite: true
            },
            type: 'User'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: connectionWithoutNodeID.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) @relay(isConnectionWithoutNodeID: true) {
          edges {
            cursor
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 3
          }
        }],
        children: [{
          children: [{
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'String'
          }, {
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isGenerated: true,
              isRequisite: true
            },
            type: 'User'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          isConnectionWithoutNodeID: true,
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: container.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
Relay.createContainer(Component, {
  queries: {
    viewer: () => Relay.QL\`fragment on Viewer { actor { id } }\`
  }
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
Relay.createContainer(Component, {
  queries: {
    viewer: () => function () {
      return {
        children: [{
          children: [{
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'actor',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            inferredRootCallName: 'node',
            inferredPrimaryKey: 'id'
          },
          type: 'User'
        }],
        id: Relay.QL.__id(),
        kind: 'Fragment',
        metadata: {},
        name: 'Unknown_ViewerRelayQL',
        type: 'Viewer'
      };
    }()
  }
});
`;

exports[`BabelPluginRelay matches expected output: duplicate-variables.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: graphql\`
    fragment CompatProfile_user on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`,
  user2: graphql\`
    fragment CompatProfile_user2 on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: function () {
    return require('./__generated__/CompatProfile_user.graphql');
  },
  user2: function () {
    return require('./__generated__/CompatProfile_user2.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: duplicate-variables.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: graphql\`
    fragment CompatProfile_user on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`,
  user2: graphql\`
    fragment CompatProfile_user2 on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: {
    modern: function () {
      return require('./__generated__/CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'uri',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }],
              fieldName: 'profile_picture',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'Image'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  },
  user2: {
    modern: function () {
      return require('./__generated__/CompatProfile_user2.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'uri',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }],
              fieldName: 'profile_picture',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'Image'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user2',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: duplicate-variables.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: graphql\`
    fragment CompatProfile_user on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`,
  user2: graphql\`
    fragment CompatProfile_user2 on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: function () {
    return require('CompatProfile_user.graphql');
  },
  user2: function () {
    return require('CompatProfile_user2.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: duplicate-variables.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: graphql\`
    fragment CompatProfile_user on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`,
  user2: graphql\`
    fragment CompatProfile_user2 on User @argumentDefinitions(
     scale: {type: "Float"}
    ) {
      profile_picture(scale: $scale) {
        uri
      }
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfilePic = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfilePic, {
  user: {
    modern: function () {
      return require('CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'uri',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }],
              fieldName: 'profile_picture',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'Image'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  },
  user2: {
    modern: function () {
      return require('CompatProfile_user2.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [{
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'scale'
        }],
        node: function () {
          return {
            children: [{
              calls: [{
                kind: 'Call',
                metadata: {
                  type: 'Float'
                },
                name: 'scale',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'scale'
                }
              }],
              children: [{
                fieldName: 'uri',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }],
              fieldName: 'profile_picture',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'Image'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user2',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: error_confusing-fragment-name.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_data on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginGraphQL: Fragment \`CompatProfile_data\` should not end in \`_data\` to avoid conflict with a fragment named \`CompatProfile\` which also provides resulting data via the React prop \`data\`. Either rename this fragment to \`CompatProfile\` or choose a different prop name.
`;

exports[`BabelPluginRelay matches expected output: error_confusing-fragment-name.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_data on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginGraphQL: Fragment \`CompatProfile_data\` should not end in \`_data\` to avoid conflict with a fragment named \`CompatProfile\` which also provides resulting data via the React prop \`data\`. Either rename this fragment to \`CompatProfile\` or choose a different prop name.
`;

exports[`BabelPluginRelay matches expected output: error_confusing-fragment-name.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_data on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginGraphQL: Fragment \`CompatProfile_data\` should not end in \`_data\` to avoid conflict with a fragment named \`CompatProfile\` which also provides resulting data via the React prop \`data\`. Either rename this fragment to \`CompatProfile\` or choose a different prop name.
`;

exports[`BabelPluginRelay matches expected output: error_confusing-fragment-name.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_data on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginGraphQL: Fragment \`CompatProfile_data\` should not end in \`_data\` to avoid conflict with a fragment named \`CompatProfile\` which also provides resulting data via the React prop \`data\`. Either rename this fragment to \`CompatProfile\` or choose a different prop name.
`;

exports[`BabelPluginRelay matches expected output: error_too-many-fragments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }

    fragment CompatProfile_viewer on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one fragment in the graphql tag referenced by the property user.
`;

exports[`BabelPluginRelay matches expected output: error_too-many-fragments.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }

    fragment CompatProfile_viewer on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one fragment in the graphql tag referenced by the property user.
`;

exports[`BabelPluginRelay matches expected output: error_too-many-fragments.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }

    fragment CompatProfile_viewer on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one fragment in the graphql tag referenced by the property user.
`;

exports[`BabelPluginRelay matches expected output: error_too-many-fragments.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }

    fragment CompatProfile_viewer on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one fragment in the graphql tag referenced by the property user.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-fragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }

  fragment Whoopsie_key on User {
    name
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one operation (query, mutation, or subscription) per graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-fragment.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }

  fragment Whoopsie_key on User {
    name
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one operation (query, mutation, or subscription) per graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-fragment.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }

  fragment Whoopsie_key on User {
    name
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one operation (query, mutation, or subscription) per graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-fragment.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }

  fragment Whoopsie_key on User {
    name
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected exactly one operation (query, mutation, or subscription) per graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-operation.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  query Whoopsie {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected only fragments within this graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-operation.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  query Whoopsie {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected only fragments within this graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-operation.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  query Whoopsie {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected only fragments within this graphql tag.
`;

exports[`BabelPluginRelay matches expected output: error_unexpected-operation.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  query Whoopsie {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Expected only fragments within this graphql tag.
`;

exports[`BabelPluginRelay matches expected output: export-refetch-container.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const {createRefetchContainer, graphql} = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(
  RefetchExample,
  graphql\`
    fragment RefetchExample_user on User {
      name
    }
  \`,
  graphql\`
    query RefetchExampleRefetchQuery {
      viewer {
        actor {
          ...RefetchExample_user
        }
      }
    }
  \`,
);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const { createRefetchContainer, graphql } = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(RefetchExample, {
  user: function () {
    return require('./__generated__/RefetchExample_user.graphql');
  }
}, function () {
  return require('./__generated__/RefetchExampleRefetchQuery.graphql');
});
`;

exports[`BabelPluginRelay matches expected output: export-refetch-container.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const {createRefetchContainer, graphql} = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(
  RefetchExample,
  graphql\`
    fragment RefetchExample_user on User {
      name
    }
  \`,
  graphql\`
    query RefetchExampleRefetchQuery {
      viewer {
        actor {
          ...RefetchExample_user
        }
      }
    }
  \`,
);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const { createRefetchContainer, graphql } = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(RefetchExample, {
  user: {
    modern: function () {
      return require('./__generated__/RefetchExample_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'RefetchExample_user',
            type: 'User'
          };
        }()
      };
    }
  }
}, {
  modern: function () {
    return require('./__generated__/RefetchExampleRefetchQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const RefetchExample_user = (RefetchExample.__container__ || RefetchExample).getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [],
      name: 'RefetchExampleRefetchQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(RefetchExample_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'RefetchExampleRefetchQuery',
          type: 'Query'
        };
      }()
    };
  }
});
`;

exports[`BabelPluginRelay matches expected output: export-refetch-container.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const {createRefetchContainer, graphql} = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(
  RefetchExample,
  graphql\`
    fragment RefetchExample_user on User {
      name
    }
  \`,
  graphql\`
    query RefetchExampleRefetchQuery {
      viewer {
        actor {
          ...RefetchExample_user
        }
      }
    }
  \`,
);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const { createRefetchContainer, graphql } = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(RefetchExample, {
  user: function () {
    return require('RefetchExample_user.graphql');
  }
}, function () {
  return require('RefetchExampleRefetchQuery.graphql');
});
`;

exports[`BabelPluginRelay matches expected output: export-refetch-container.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const {createRefetchContainer, graphql} = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(
  RefetchExample,
  graphql\`
    fragment RefetchExample_user on User {
      name
    }
  \`,
  graphql\`
    query RefetchExampleRefetchQuery {
      viewer {
        actor {
          ...RefetchExample_user
        }
      }
    }
  \`,
);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule RefetchExample
 */

const React = require('react');
const { createRefetchContainer, graphql } = require('react-relay/classic');

class RefetchExample extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

module.exports = createRefetchContainer(RefetchExample, {
  user: {
    modern: function () {
      return require('RefetchExample_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'RefetchExample_user',
            type: 'User'
          };
        }()
      };
    }
  }
}, {
  modern: function () {
    return require('RefetchExampleRefetchQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const RefetchExample_user = (RefetchExample.__container__ || RefetchExample).getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [],
      name: 'RefetchExampleRefetchQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(RefetchExample_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'RefetchExampleRefetchQuery',
          type: 'Query'
        };
      }()
    };
  }
});
`;

exports[`BabelPluginRelay matches expected output: fieldForEnum.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        gender
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'gender',
        kind: 'Field',
        metadata: {},
        type: 'Gender'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithAlias.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        realName: name
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        alias: 'realName',
        fieldName: 'name',
        kind: 'Field',
        metadata: {},
        type: 'String'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithAliasAndArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        mugShot: profilePicture(size: 100) {
          uri
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        alias: 'mugShot',
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'size',
          value: {
            kind: 'CallValue',
            callValue: 100
          }
        }],
        children: [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        profilePicture(size: 100) {
          uri
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'size',
          value: {
            kind: 'CallValue',
            callValue: 100
          }
        }],
        children: [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithCustomScalarArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    customScalar(arg: {give: "relay"}) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'JSON'
      },
      name: 'arg',
      value: {
        kind: 'CallValue',
        callValue: {
          give: 'relay'
        }
      }
    }],
    children: [{
      fieldName: 'title',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }],
    fieldName: 'customScalar',
    kind: 'Query',
    metadata: {
      isPlural: true,
      identifyingArgName: 'arg',
      identifyingArgType: 'JSON'
    },
    name: 'Unknown',
    type: 'SearchResult'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithEmptyArrayArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on User {
    friends(isViewerFriend: false) {
      count
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      calls: [{
        kind: 'Call',
        metadata: {},
        name: 'isViewerFriend',
        value: {
          kind: 'CallValue',
          callValue: false
        }
      }],
      children: [{
        fieldName: 'count',
        kind: 'Field',
        metadata: {},
        type: 'Int'
      }],
      fieldName: 'friends',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isConnection: true,
        isFindable: true
      },
      type: 'UserConnection'
    }, {
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {},
    name: 'UnknownRelayQL',
    type: 'User'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithEnumArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 5, gender: MALE) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 5
          }
        }, {
          kind: 'Call',
          metadata: {
            type: 'Gender'
          },
          name: 'gender',
          value: {
            kind: 'CallValue',
            callValue: 'MALE'
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithEnumQueryArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query($gender_0: Gender) {
    node(id: 123) {
      ... on User {
        friends(first: 5, gender: $gender_0) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 5
          }
        }, {
          kind: 'Call',
          metadata: {
            type: 'Gender'
          },
          name: 'gender',
          value: {
            kind: 'CallVariable',
            callVariableName: 'gender_0'
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithFakeConnection.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var foo = RelayClassic.QL\`
  fragment on User {
    fakeConnection {
      edges {
        node {
          id
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var foo = function () {
  return {
    children: [{
      children: [{
        children: [{
          children: [{
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'node',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            inferredRootCallName: 'node',
            inferredPrimaryKey: 'id',
            isRequisite: true
          },
          type: 'FakeNode'
        }, {
          fieldName: 'cursor',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'String'
        }],
        fieldName: 'edges',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isPlural: true
        },
        type: 'FakeEdge'
      }],
      fieldName: 'fakeConnection',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true
      },
      type: 'FakeConnection'
    }, {
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: RelayClassic.QL.__id(),
    kind: 'Fragment',
    metadata: {},
    name: 'UnknownRelayQL',
    type: 'User'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fieldWithParams.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        profilePicture(size: $size) {
          uri
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'size',
          value: {
            kind: 'CallVariable',
            callVariableName: 'size'
          }
        }],
        children: [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment on Node { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragment-spread.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
      ...CompatProfilePic_user
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('./__generated__/CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: fragment-spread.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
      ...CompatProfilePic_user
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('./__generated__/CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatProfilePic_user = CompatProfilePic.getFragment('user');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: fragment-spread.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
      ...CompatProfilePic_user
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: fragment-spread.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
      ...CompatProfilePic_user
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const CompatProfilePic = require('CompatProfilePic');
const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatProfilePic_user = CompatProfilePic.getFragment('user');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: fragmentDirectives.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment on Node @relay(plural: true) { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      plural: true,
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragmentOnBadType.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment on NotAType { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: GraphQL Validation Error: Unknown type "NotAType". Did you mean "__Type"?
>
> fragment UnknownRelayQL on NotAType { id }
>                            ^^^
`;

exports[`BabelPluginRelay matches expected output: fragmentWithModuleName.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/** @providesModule Foo.react */
var Relay = require('react-relay');
var x = Relay.QL\`fragment Foo on Node { id }\`;
var y = Relay.QL\`fragment Bar on Node { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/** @providesModule Foo.react */
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'Foo',
    type: 'Node'
  };
}();
var y = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'Bar',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragmentWithName.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment FragmentNameHere on Node { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'FragmentNameHere',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragmentWithPossibleId.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on Actor {
    name
    ... on User { id }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'name',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }, {
      children: [{
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }, {
        fieldName: '__typename',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {
        isAbstract: true
      },
      name: 'IdFragment',
      type: 'Node'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Actor'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: fragmentWithReference.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment on Node { \${reference} }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function (RQL_0) {
  return {
    children: [].concat.apply([], [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, Relay.QL.__frag(RQL_0)]),
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}(reference);
`;

exports[`BabelPluginRelay matches expected output: fragmentWithoutCommas.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on Node {
    \${reference}
    id
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function (RQL_0) {
  return {
    children: [].concat.apply([], [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, Relay.QL.__frag(RQL_0)]),
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}(reference);
`;

exports[`BabelPluginRelay matches expected output: inlineFragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on Node {
    ... on User {
      userOnlyField
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'userOnlyField',
        kind: 'Field',
        metadata: {},
        type: 'String'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: inlineFragmentWithoutType.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
/*
TODO: Upgrade to graphql@0.4.7 and uncomment this.

var x = Relay.QL\`
  fragment on Node {
    ... {
      id
    }
  }
\`;
*/

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
/*
TODO: Upgrade to graphql@0.4.7 and uncomment this.

var x = Relay.QL\`
  fragment on Node {
    ... {
      id
    }
  }
\`;
*/
`;

exports[`BabelPluginRelay matches expected output: introspectionQueryForSchema.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query IntrospectionQueryForSchema {
    __schema {
      types {
        name
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function () {
  return {
    children: [{
      children: [{
        fieldName: "name",
        kind: "Field",
        metadata: {},
        type: "String"
      }],
      fieldName: "types",
      kind: "Field",
      metadata: {
        canHaveSubselections: true,
        isPlural: true
      },
      type: "__Type"
    }],
    fieldName: "__schema",
    kind: "Query",
    metadata: {},
    name: "IntrospectionQueryForSchema",
    type: "__Schema"
  };
}();
`;

exports[`BabelPluginRelay matches expected output: introspectionQueryForType.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query IntrospectionQueryForType {
    __type(name: "Root") {
      name
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function () {
  return {
    calls: [{
      kind: "Call",
      metadata: {
        type: "String!"
      },
      name: "name",
      value: {
        kind: "CallValue",
        callValue: "Root"
      }
    }],
    children: [{
      fieldName: "name",
      kind: "Field",
      metadata: {},
      type: "String"
    }],
    fieldName: "__type",
    kind: "Query",
    metadata: {
      identifyingArgName: "name",
      identifyingArgType: "String!"
    },
    name: "IntrospectionQueryForType",
    type: "__Type"
  };
}();
`;

exports[`BabelPluginRelay matches expected output: memoize-inner-scope.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return (
    <View>
      <QueryRenderer
        environment={RelayStore}
        query={graphql\`
          query ExampleQuery($id: ID!) {
            node(id: $id) {
              ...ProfilePic_user
            }
          }
        \`}
        variables={{id: '12345'}}
      />
    </View>
  );
}

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

var _graphql2;

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return <View>
      <QueryRenderer environment={RelayStore} query={_graphql2 || (_graphql2 = function () {
      return require('./__generated__/ExampleQuery.graphql');
    })} variables={{ id: '12345' }} />
    </View>;
}
`;

exports[`BabelPluginRelay matches expected output: memoize-inner-scope.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return (
    <View>
      <QueryRenderer
        environment={RelayStore}
        query={graphql\`
          query ExampleQuery($id: ID!) {
            node(id: $id) {
              ...ProfilePic_user
            }
          }
        \`}
        variables={{id: '12345'}}
      />
    </View>
  );
}

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

var _graphql2;

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return <View>
      <QueryRenderer environment={RelayStore} query={_graphql2 || (_graphql2 = {
      modern: function () {
        return require('./__generated__/ExampleQuery.graphql');
      },
      classic: function (RelayQL_GENERATED) {
        const ProfilePic_user = ProfilePic.getFragment('user');
        return {
          kind: 'OperationDefinition',
          argumentDefinitions: [{
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'id'
          }],
          name: 'ExampleQuery',
          operation: 'query',
          node: function () {
            return {
              children: [{
                calls: [{
                  kind: 'Call',
                  metadata: {},
                  name: 'id',
                  value: {
                    kind: 'CallVariable',
                    callVariableName: 'id'
                  }
                }],
                children: [].concat.apply([], [{
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }, {
                  fieldName: '__typename',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'String'
                }, RelayQL_GENERATED.__frag(ProfilePic_user)]),
                fieldName: 'node',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  inferredRootCallName: 'node',
                  inferredPrimaryKey: 'id',
                  isAbstract: true
                },
                type: 'Node'
              }],
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'ExampleQuery',
              type: 'Query'
            };
          }()
        };
      }
    })} variables={{ id: '12345' }} />
    </View>;
}
`;

exports[`BabelPluginRelay matches expected output: memoize-inner-scope.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return (
    <View>
      <QueryRenderer
        environment={RelayStore}
        query={graphql\`
          query ExampleQuery($id: ID!) {
            node(id: $id) {
              ...ProfilePic_user
            }
          }
        \`}
        variables={{id: '12345'}}
      />
    </View>
  );
}

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

var _graphql2;

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return <View>
      <QueryRenderer environment={RelayStore} query={_graphql2 || (_graphql2 = function () {
      return require('ExampleQuery.graphql');
    })} variables={{ id: '12345' }} />
    </View>;
}
`;

exports[`BabelPluginRelay matches expected output: memoize-inner-scope.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return (
    <View>
      <QueryRenderer
        environment={RelayStore}
        query={graphql\`
          query ExampleQuery($id: ID!) {
            node(id: $id) {
              ...ProfilePic_user
            }
          }
        \`}
        variables={{id: '12345'}}
      />
    </View>
  );
}

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SomeTopLevelView
 */

'use strict';

var _graphql2;

const ProfilePic = require('ProfilePic');

function SomeTopLevelView() {
  let _graphql = 'unrelated';

  return <View>
      <QueryRenderer environment={RelayStore} query={_graphql2 || (_graphql2 = {
      modern: function () {
        return require('ExampleQuery.graphql');
      },
      classic: function (RelayQL_GENERATED) {
        const ProfilePic_user = ProfilePic.getFragment('user');
        return {
          kind: 'OperationDefinition',
          argumentDefinitions: [{
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'id'
          }],
          name: 'ExampleQuery',
          operation: 'query',
          node: function () {
            return {
              children: [{
                calls: [{
                  kind: 'Call',
                  metadata: {},
                  name: 'id',
                  value: {
                    kind: 'CallVariable',
                    callVariableName: 'id'
                  }
                }],
                children: [].concat.apply([], [{
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }, {
                  fieldName: '__typename',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'String'
                }, RelayQL_GENERATED.__frag(ProfilePic_user)]),
                fieldName: 'node',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  inferredRootCallName: 'node',
                  inferredPrimaryKey: 'id',
                  isAbstract: true
                },
                type: 'Node'
              }],
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'ExampleQuery',
              type: 'Query'
            };
          }()
        };
      }
    })} variables={{ id: '12345' }} />
    </View>;
}
`;

exports[`BabelPluginRelay matches expected output: metadataConnection.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        friends(first: 3) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        calls: [{
          kind: 'Call',
          metadata: {
            type: 'Int'
          },
          name: 'first',
          value: {
            kind: 'CallValue',
            callValue: 3
          }
        }],
        children: [{
          children: [{
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isRequisite: true
            },
            type: 'User'
          }, {
            fieldName: 'cursor',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          fieldName: 'edges',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isPlural: true
          },
          type: 'UserConnectionEdge'
        }, {
          children: [{
            fieldName: 'hasNextPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }, {
            fieldName: 'hasPreviousPage',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'Boolean'
          }],
          fieldName: 'pageInfo',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isGenerated: true,
            isRequisite: true
          },
          type: 'PageInfo'
        }],
        fieldName: 'friends',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isConnection: true,
          isFindable: true
        },
        type: 'UserConnection'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataConnectionLimitable.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    viewer {
      configs {
        edges {
          node {
            name
          }
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      children: [{
        children: [{
          children: [{
            fieldName: 'name',
            kind: 'Field',
            metadata: {},
            type: 'String'
          }],
          fieldName: 'node',
          kind: 'Field',
          metadata: {
            canHaveSubselections: true,
            isRequisite: true
          },
          type: 'Config'
        }, {
          fieldName: 'cursor',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'String'
        }],
        fieldName: 'edges',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          isPlural: true
        },
        type: 'ConfigsConnectionEdge'
      }],
      fieldName: 'configs',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true
      },
      type: 'ConfigsConnection'
    }],
    fieldName: 'viewer',
    kind: 'Query',
    metadata: {},
    name: 'Unknown',
    type: 'Viewer'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataDynamic.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on NewsFeedConnection {
    edges {
      node {
        id
        ... on Story {
          attachments
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      children: [{
        children: [{
          fieldName: 'id',
          kind: 'Field',
          metadata: {
            isRequisite: true
          },
          type: 'String'
        }, {
          fieldName: '__typename',
          kind: 'Field',
          metadata: {
            isGenerated: true,
            isRequisite: true
          },
          type: 'String'
        }, {
          children: [{
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            fieldName: 'attachments',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isAbstract: true,
              isPlural: true
            },
            type: 'Node'
          }, {
            fieldName: 'id',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          id: Relay.QL.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'Story',
          type: 'Story'
        }],
        fieldName: 'node',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          inferredRootCallName: 'node',
          inferredPrimaryKey: 'id',
          isAbstract: true,
          isRequisite: true
        },
        type: 'Node'
      }, {
        fieldName: 'cursor',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      fieldName: 'edges',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isPlural: true
      },
      type: 'NewsFeedConnectionEdge'
    }, {
      children: [{
        fieldName: 'hasNextPage',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'Boolean'
      }, {
        fieldName: 'hasPreviousPage',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'Boolean'
      }],
      fieldName: 'pageInfo',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isGenerated: true,
        isRequisite: true
      },
      type: 'PageInfo'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {},
    name: 'UnknownRelayQL',
    type: 'NewsFeedConnection'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataGenerated.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123)
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataNonFindable.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    viewer {
      pendingPosts {
        count
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      children: [{
        fieldName: 'count',
        kind: 'Field',
        metadata: {},
        type: 'Int'
      }],
      fieldName: 'pendingPosts',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isConnection: true
      },
      type: 'PendingPostsConnection'
    }],
    fieldName: 'viewer',
    kind: 'Query',
    metadata: {},
    name: 'Unknown',
    type: 'Viewer'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataPlural.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        websites
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'websites',
        kind: 'Field',
        metadata: {
          isPlural: true
        },
        type: 'String'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataRequisite.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`fragment on Node { id }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {
      isAbstract: true
    },
    name: 'UnknownRelayQL',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: metadataVarArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  fragment on User {
    friends(orderby: $order) {
      count
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    children: [{
      calls: [{
        kind: 'Call',
        metadata: {},
        name: 'orderby',
        value: {
          kind: 'CallVariable',
          callVariableName: 'order'
        }
      }],
      children: [{
        fieldName: 'count',
        kind: 'Field',
        metadata: {},
        type: 'Int'
      }],
      fieldName: 'friends',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        isConnection: true,
        isFindable: true
      },
      type: 'UserConnection'
    }, {
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    id: Relay.QL.__id(),
    kind: 'Fragment',
    metadata: {},
    name: 'UnknownRelayQL',
    type: 'User'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: module-operation.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = function () {
  return require('./__generated__/CompatCommentCreateMutation.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: module-operation.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = {
  modern: function () {
    return require('./__generated__/CompatCommentCreateMutation.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input'
      }],
      name: 'CompatCommentCreateMutation',
      operation: 'mutation',
      node: function () {
        return {
          calls: [{
            kind: 'Call',
            metadata: {},
            name: 'commentCreate',
            value: {
              kind: 'CallVariable',
              callVariableName: 'input'
            }
          }],
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            fieldName: 'clientMutationId',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          kind: 'Mutation',
          metadata: {
            inputType: 'CommentCreateInput'
          },
          name: 'CompatCommentCreateMutation',
          responseType: 'CommentCreateResponsePayload'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: module-operation.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = function () {
  return require('CompatCommentCreateMutation.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: module-operation.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatCommentCreateMutation
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = {
  modern: function () {
    return require('CompatCommentCreateMutation.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input'
      }],
      name: 'CompatCommentCreateMutation',
      operation: 'mutation',
      node: function () {
        return {
          calls: [{
            kind: 'Call',
            metadata: {},
            name: 'commentCreate',
            value: {
              kind: 'CallVariable',
              callVariableName: 'input'
            }
          }],
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            fieldName: 'clientMutationId',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          kind: 'Mutation',
          metadata: {
            inputType: 'CommentCreateInput'
          },
          name: 'CompatCommentCreateMutation',
          responseType: 'CommentCreateResponsePayload'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: multiple-root-fields.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    viewer {
      actor {
        id
        ...CompatProfilePic_user
      }
    }
    user: node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = function () {
  return require('./__generated__/CompatViewerQuery.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: multiple-root-fields.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    viewer {
      actor {
        id
        ...CompatProfilePic_user
      }
    }
    user: node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = {
  modern: function () {
    return require('./__generated__/CompatViewerQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id'
      }, {
        defaultValue: 1.5,
        kind: 'LocalArgument',
        name: 'scale'
      }],
      name: 'CompatViewerQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            alias: 'user',
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'id',
              value: {
                kind: 'CallVariable',
                callVariableName: 'id'
              }
            }],
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, {
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'User',
              type: 'User'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isAbstract: true
            },
            type: 'Node'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'CompatViewerQuery',
          type: 'Query'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: multiple-root-fields.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    viewer {
      actor {
        id
        ...CompatProfilePic_user
      }
    }
    user: node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = function () {
  return require('CompatViewerQuery.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: multiple-root-fields.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    viewer {
      actor {
        id
        ...CompatProfilePic_user
      }
    }
    user: node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = {
  modern: function () {
    return require('CompatViewerQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id'
      }, {
        defaultValue: 1.5,
        kind: 'LocalArgument',
        name: 'scale'
      }],
      name: 'CompatViewerQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            alias: 'user',
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'id',
              value: {
                kind: 'CallVariable',
                callVariableName: 'id'
              }
            }],
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, {
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'User',
              type: 'User'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isAbstract: true
            },
            type: 'Node'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'CompatViewerQuery',
          type: 'Query'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: mutation.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = function () {
  return require('./__generated__/CompatCommentCreateMutation.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: mutation.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = {
  modern: function () {
    return require('./__generated__/CompatCommentCreateMutation.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input'
      }],
      name: 'CompatCommentCreateMutation',
      operation: 'mutation',
      node: function () {
        return {
          calls: [{
            kind: 'Call',
            metadata: {},
            name: 'commentCreate',
            value: {
              kind: 'CallVariable',
              callVariableName: 'input'
            }
          }],
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            fieldName: 'clientMutationId',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          kind: 'Mutation',
          metadata: {
            inputType: 'CommentCreateInput'
          },
          name: 'CompatCommentCreateMutation',
          responseType: 'CommentCreateResponsePayload'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: mutation.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = function () {
  return require('CompatCommentCreateMutation.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: mutation.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = graphql\`
  mutation CompatCommentCreateMutation($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      viewer {
        actor {
          id
          ...CompatProfilePic_user
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatCommentCreateMutation = {
  modern: function () {
    return require('CompatCommentCreateMutation.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input'
      }],
      name: 'CompatCommentCreateMutation',
      operation: 'mutation',
      node: function () {
        return {
          calls: [{
            kind: 'Call',
            metadata: {},
            name: 'commentCreate',
            value: {
              kind: 'CallVariable',
              callVariableName: 'input'
            }
          }],
          children: [{
            children: [{
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            fieldName: 'viewer',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true
            },
            type: 'Viewer'
          }, {
            fieldName: 'clientMutationId',
            kind: 'Field',
            metadata: {
              isGenerated: true,
              isRequisite: true
            },
            type: 'String'
          }],
          kind: 'Mutation',
          metadata: {
            inputType: 'CommentCreateInput'
          },
          name: 'CompatCommentCreateMutation',
          responseType: 'CommentCreateResponsePayload'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: mutation.txt 5`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation {
    actorSubscribe(input: $input) {
      actor {
        profilePicture
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {},
      name: 'actorSubscribe',
      value: {
        kind: 'CallVariable',
        callVariableName: 'input'
      }
    }],
    children: [{
      children: [{
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      fieldName: 'actor',
      kind: 'Field',
      metadata: {
        canHaveSubselections: true,
        inferredRootCallName: 'node',
        inferredPrimaryKey: 'id'
      },
      type: 'User'
    }, {
      fieldName: 'clientMutationId',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    kind: 'Mutation',
    metadata: {
      inputType: 'ActorSubscribeInput'
    },
    name: 'Unknown',
    responseType: 'ActorSubscribeResponsePayload'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: mutationBadSchemaMissingArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation {
    mutationMissingArg
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Your schema defines a mutation field \`mutationMissingArg\` that takes 0 arguments, but mutation fields must have exactly one argument named \`input\`.
`;

exports[`BabelPluginRelay matches expected output: mutationBadSchemaWrongArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation {
    mutationWrongArgs
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Your schema defines a mutation field \`mutationWrongArgs\` that takes an argument named \`foo\`, but mutation fields must have exactly one argument named \`input\`.
`;

exports[`BabelPluginRelay matches expected output: mutationWithExtraArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation MutationNameHere {
    actorSubscribe(input: $input, extra: $extra) {
      \${reference}
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: GraphQL Validation Error: Unknown argument "extra" on field "actorSubscribe" of type "Mutation".
>
>     actorSubscribe(input: $input, extra: $extra) {
>                                   ^^^
`;

exports[`BabelPluginRelay matches expected output: mutationWithName.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation MutationNameHere {
    actorSubscribe(input: $input) {
      \${reference}
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function (RQL_0) {
  return {
    calls: [{
      kind: 'Call',
      metadata: {},
      name: 'actorSubscribe',
      value: {
        kind: 'CallVariable',
        callVariableName: 'input'
      }
    }],
    children: [].concat.apply([], [{
      fieldName: 'clientMutationId',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, Relay.QL.__frag(RQL_0)]),
    kind: 'Mutation',
    metadata: {
      inputType: 'ActorSubscribeInput'
    },
    name: 'MutationNameHere',
    responseType: 'ActorSubscribeResponsePayload'
  };
}(reference);
`;

exports[`BabelPluginRelay matches expected output: mutationWithoutArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation {
    actorSubscribe
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {},
      name: 'actorSubscribe',
      value: {
        kind: 'CallVariable',
        callVariableName: 'input'
      }
    }],
    children: [{
      fieldName: 'clientMutationId',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    kind: 'Mutation',
    metadata: {
      inputType: 'ActorSubscribeInput'
    },
    name: 'Unknown',
    responseType: 'ActorSubscribeResponsePayload'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: no-fragment-spread.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('./__generated__/CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-fragment-spread.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('./__generated__/CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-fragment-spread.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-fragment-spread.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: graphql\`
    fragment CompatProfile_user on User {
      name
    }
  \`,
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('./__generated__/CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('./__generated__/CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('CompatProfile_user.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object-many-fragments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('./__generated__/CompatProfile_user.graphql');
  },
  viewer: function () {
    return require('./__generated__/CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object-many-fragments.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('./__generated__/CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  },
  viewer: {
    modern: function () {
      return require('./__generated__/CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object-many-fragments.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: function () {
    return require('CompatProfile_user.graphql');
  },
  viewer: function () {
    return require('CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: no-object-many-fragments.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile_user on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  user: {
    modern: function () {
      return require('CompatProfile_user.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_user',
            type: 'User'
          };
        }()
      };
    }
  },
  viewer: {
    modern: function () {
      return require('CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: nonExistentMutation.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  mutation {
    fakeMutation(input: $input) {
      actor {
        profilePicture
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: GraphQL Validation Error: Cannot query field "fakeMutation" on type "Mutation".
>
>     fakeMutation(input: $input) {
>     ^^^
`;

exports[`BabelPluginRelay matches expected output: nonRootNodeField.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var fragment = RelayClassic.QL\`
  fragment on InvalidType {
    node(id: 123) {
      ... on User {
        name
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You defined a \`node(id: Int)\` field on type \`InvalidType\`, but Relay requires the \`node\` field to be defined on the root type. See the Object Identification Guide: 
http://facebook.github.io/relay/docs/graphql-object-identification.html
`;

exports[`BabelPluginRelay matches expected output: pluralField.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 456) {
      ... on Story {
        actors {
          id
          __typename
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 456
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        children: [{
          fieldName: 'id',
          kind: 'Field',
          metadata: {
            isRequisite: true
          },
          type: 'String'
        }, {
          fieldName: '__typename',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'actors',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true,
          inferredRootCallName: 'node',
          inferredPrimaryKey: 'id',
          isPlural: true
        },
        type: 'User'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'Story',
      type: 'Story'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: query.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = function () {
  return require('./__generated__/CompatViewerQuery.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: query.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = {
  modern: function () {
    return require('./__generated__/CompatViewerQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id'
      }, {
        defaultValue: 1.5,
        kind: 'LocalArgument',
        name: 'scale'
      }],
      name: 'CompatViewerQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'id',
              value: {
                kind: 'CallVariable',
                callVariableName: 'id'
              }
            }],
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, {
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'User',
              type: 'User'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isAbstract: true
            },
            type: 'Node'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'CompatViewerQuery',
          type: 'Query'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: query.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = function () {
  return require('CompatViewerQuery.graphql');
};
`;

exports[`BabelPluginRelay matches expected output: query.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = graphql\`
   query CompatViewerQuery($id: ID!, $scale: Float = 1.5) {
    node(id: $id) {
      ... on User {
        id
        ...CompatProfilePic_user
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule Compat
 */

'use strict';

const graphql = require('graphql');
const CompatProfilePic = require('CompatProfilePic');

const CompatViewerQuery = {
  modern: function () {
    return require('CompatViewerQuery.graphql');
  },
  classic: function (RelayQL_GENERATED) {
    const CompatProfilePic_user = CompatProfilePic.getFragment('user');
    return {
      kind: 'OperationDefinition',
      argumentDefinitions: [{
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id'
      }, {
        defaultValue: 1.5,
        kind: 'LocalArgument',
        name: 'scale'
      }],
      name: 'CompatViewerQuery',
      operation: 'query',
      node: function () {
        return {
          children: [{
            calls: [{
              kind: 'Call',
              metadata: {},
              name: 'id',
              value: {
                kind: 'CallVariable',
                callVariableName: 'id'
              }
            }],
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, {
              children: [].concat.apply([], [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
              id: RelayQL_GENERATED.__id(),
              kind: 'Fragment',
              metadata: {},
              name: 'User',
              type: 'User'
            }],
            fieldName: 'node',
            kind: 'Field',
            metadata: {
              canHaveSubselections: true,
              inferredRootCallName: 'node',
              inferredPrimaryKey: 'id',
              isAbstract: true
            },
            type: 'Node'
          }],
          id: RelayQL_GENERATED.__id(),
          kind: 'Fragment',
          metadata: {},
          name: 'CompatViewerQuery',
          type: 'Query'
        };
      }()
    };
  }
};
`;

exports[`BabelPluginRelay matches expected output: queryWithArrayObjectArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    searchAll(queries: [$query]) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: '[SearchInput!]!'
      },
      name: 'queries',
      value: [{
        kind: 'CallVariable',
        callVariableName: 'query'
      }]
    }],
    children: [{
      fieldName: 'title',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }],
    fieldName: 'searchAll',
    kind: 'Query',
    metadata: {
      isPlural: true,
      identifyingArgName: 'queries',
      identifyingArgType: '[SearchInput!]!'
    },
    name: 'Unknown',
    type: 'SearchResult'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithArrayObjectNestedVariable.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    searchAll(queries: [{queryText: $query}]) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Unexpected nested variable \`query\`; variables are supported as top-level arguments - \`node(id: $id)\` - or directly within lists - \`nodes(ids: [$id])\`.
`;

exports[`BabelPluginRelay matches expected output: queryWithArrayObjectValue.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    searchAll(queries: [{queryText: "RelayClassic"}]) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: '[SearchInput!]!'
      },
      name: 'queries',
      value: [{
        kind: 'CallValue',
        callValue: {
          queryText: 'RelayClassic'
        }
      }]
    }],
    children: [{
      fieldName: 'title',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }],
    fieldName: 'searchAll',
    kind: 'Query',
    metadata: {
      isPlural: true,
      identifyingArgName: 'queries',
      identifyingArgType: '[SearchInput!]!'
    },
    name: 'Unknown',
    type: 'SearchResult'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithBadDirective.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) @bad(if: $foo) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You supplied a directive named \`bad\`, but no such directive exists.
`;

exports[`BabelPluginRelay matches expected output: queryWithBadDirectiveArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) @if(bad: $foo) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: You supplied a directive named \`if\`, but no such directive exists.
`;

exports[`BabelPluginRelay matches expected output: queryWithDirectives.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) @include(if: $foo) {
      ... on User @include(if: $bar) {
        name @skip(if: $baz)
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        directives: [{
          kind: 'Directive',
          name: 'skip',
          args: [{
            name: 'if',
            value: {
              kind: 'CallVariable',
              callVariableName: 'baz'
            }
          }]
        }],
        fieldName: 'name',
        kind: 'Field',
        metadata: {},
        type: 'String'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      directives: [{
        kind: 'Directive',
        name: 'include',
        args: [{
          name: 'if',
          value: {
            kind: 'CallVariable',
            callVariableName: 'bar'
          }
        }]
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    directives: [{
      kind: 'Directive',
      name: 'include',
      args: [{
        name: 'if',
        value: {
          kind: 'CallVariable',
          callVariableName: 'foo'
        }
      }]
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithFields.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        name
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'name',
        kind: 'Field',
        metadata: {},
        type: 'String'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithName.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query QueryNameHere {
    node(id: 123) {
      ... on User {
        profilePicture {
          uri
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        children: [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'QueryNameHere',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithNestedFields.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      ... on User {
        profilePicture {
          uri
        }
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        children: [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }],
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithNestedFragments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    node(id: 123) {
      \${frag1}
      \${frag2}
      \${frag3}
      \${frag4}
      ... on User {
        profilePicture {
          uri
          \${frag5}
          \${frag6}
          \${frag7}
          \${frag8}
        }
      }
      \${frag9}
      \${frag10}
      \${frag11}
      \${frag12}
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function (RQL_0, RQL_1, RQL_2, RQL_3, RQL_4, RQL_5, RQL_6, RQL_7, RQL_8, RQL_9, RQL_10, RQL_11) {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [].concat.apply([], [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, Relay.QL.__frag(RQL_0), Relay.QL.__frag(RQL_1), Relay.QL.__frag(RQL_2), Relay.QL.__frag(RQL_3), {
      children: [{
        children: [].concat.apply([], [{
          fieldName: 'uri',
          kind: 'Field',
          metadata: {},
          type: 'String'
        }, Relay.QL.__frag(RQL_4), Relay.QL.__frag(RQL_5), Relay.QL.__frag(RQL_6), Relay.QL.__frag(RQL_7)]),
        fieldName: 'profilePicture',
        kind: 'Field',
        metadata: {
          canHaveSubselections: true
        },
        type: 'ProfilePicture'
      }, {
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isGenerated: true,
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'User',
      type: 'User'
    }, Relay.QL.__frag(RQL_8), Relay.QL.__frag(RQL_9), Relay.QL.__frag(RQL_10), Relay.QL.__frag(RQL_11)]),
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}(frag1, frag2, frag3, frag4, frag5, frag6, frag7, frag8, frag9, frag10, frag11, frag12);
`;

exports[`BabelPluginRelay matches expected output: queryWithNullLiteral.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query MediaQuery {
    media(id: null) {
      ... on Story {
        id
      }
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'Int'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: null
      }
    }],
    children: [{
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, {
      children: [{
        fieldName: 'id',
        kind: 'Field',
        metadata: {
          isRequisite: true
        },
        type: 'String'
      }],
      id: Relay.QL.__id(),
      kind: 'Fragment',
      metadata: {},
      name: 'Story',
      type: 'Story'
    }],
    fieldName: 'media',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'Int'
    },
    name: 'MediaQuery',
    type: 'Media'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithObjectArg.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    search(query: $query) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'SearchInput!'
      },
      name: 'query',
      value: {
        kind: 'CallVariable',
        callVariableName: 'query'
      }
    }],
    children: [{
      fieldName: 'title',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }],
    fieldName: 'search',
    kind: 'Query',
    metadata: {
      isPlural: true,
      identifyingArgName: 'query',
      identifyingArgType: 'SearchInput!'
    },
    name: 'Unknown',
    type: 'SearchResult'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithObjectArgNestedVariable.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    search(query: {queryText: $query}) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: Relay Transform Error: Unexpected nested variable \`query\`; variables are supported as top-level arguments - \`node(id: $id)\` - or directly within lists - \`nodes(ids: [$id])\`.
`;

exports[`BabelPluginRelay matches expected output: queryWithObjectArgValue.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = RelayClassic.QL\`
  query {
    search(query: {queryText: "RelayClassic"}) {
      title
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
const RelayClassic = require('react-relay/classic');
var q = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'SearchInput!'
      },
      name: 'query',
      value: {
        kind: 'CallValue',
        callValue: {
          queryText: 'RelayClassic'
        }
      }
    }],
    children: [{
      fieldName: 'title',
      kind: 'Field',
      metadata: {},
      type: 'String'
    }],
    fieldName: 'search',
    kind: 'Query',
    metadata: {
      isPlural: true,
      identifyingArgName: 'query',
      identifyingArgType: 'SearchInput!'
    },
    name: 'Unknown',
    type: 'SearchResult'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithVarArgs.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  query {
    nodes(ids: [123,456]) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: '[ID!]'
      },
      name: 'ids',
      value: [{
        kind: 'CallValue',
        callValue: 123
      }, {
        kind: 'CallValue',
        callValue: 456
      }]
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    fieldName: 'nodes',
    kind: 'Query',
    metadata: {
      isPlural: true,
      isAbstract: true,
      identifyingArgName: 'ids',
      identifyingArgType: '[ID!]'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: queryWithoutFields.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`query { viewer }\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function () {
  return {
    fieldName: 'viewer',
    kind: 'Query',
    metadata: {},
    name: 'Unknown',
    type: 'Viewer'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: simple-named-fragment.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
    ...SomeOtherContainer
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: function () {
    return require('./__generated__/CompatProfile.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-fragment.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
    ...SomeOtherContainer
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('./__generated__/CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const SomeOtherContainer = SomeOtherContainer.getFragment('data');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(SomeOtherContainer)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-fragment.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
    ...SomeOtherContainer
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: function () {
    return require('CompatProfile.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-fragment.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
    ...SomeOtherContainer
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const SomeOtherContainer = SomeOtherContainer.getFragment('data');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(SomeOtherContainer)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-with-many-fragments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: function () {
    return require('./__generated__/CompatProfile.graphql');
  },
  viewer: function () {
    return require('./__generated__/CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-with-many-fragments.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('./__generated__/CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile',
            type: 'User'
          };
        }()
      };
    }
  },
  viewer: {
    modern: function () {
      return require('./__generated__/CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-with-many-fragments.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: function () {
    return require('CompatProfile.graphql');
  },
  viewer: function () {
    return require('CompatProfile_viewer.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: simple-named-with-many-fragments.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, graphql\`
  fragment CompatProfile on User {
    name
  }

  fragment CompatProfile_viewer on User {
    name
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const RelayCompatContainer = require('RelayCompatContainer');
const graphql = require('graphql');

const CompatProfile = () => null;

module.exports = RelayCompatContainer.createContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile',
            type: 'User'
          };
        }()
      };
    }
  },
  viewer: {
    modern: function () {
      return require('CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'User'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: subscription.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = Relay.QL\`
  subscription {
    likeStory(input: $input) {
      \${reference}
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = function (RQL_0) {
  return {
    calls: [{
      kind: 'Call',
      metadata: {},
      name: 'likeStory',
      value: {
        kind: 'CallVariable',
        callVariableName: 'input'
      }
    }],
    children: [].concat.apply([], [{
      fieldName: 'clientSubscriptionId',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }, Relay.QL.__frag(RQL_0)]),
    kind: 'Subscription',
    metadata: {
      inputType: 'LikeStorySubscriptionInput'
    },
    name: 'Unknown',
    responseType: 'LikeStorySubscriptionPayload'
  };
}(reference);
`;

exports[`BabelPluginRelay matches expected output: tagRelayClassicQL.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var RelayClassic = require('react-relay/classic');
var x = RelayClassic.QL\`
  query {
    node(id: 123) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var RelayClassic = require('react-relay/classic');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: tagRelayQL.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var RelayQL = require('react-relay/RelayQL');
var x = RelayQL\`
  query {
    node(id: 123) {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var RelayQL = require('react-relay/RelayQL');
var x = function () {
  return {
    calls: [{
      kind: 'Call',
      metadata: {
        type: 'ID!'
      },
      name: 'id',
      value: {
        kind: 'CallValue',
        callValue: 123
      }
    }],
    children: [{
      fieldName: 'id',
      kind: 'Field',
      metadata: {
        isRequisite: true
      },
      type: 'String'
    }, {
      fieldName: '__typename',
      kind: 'Field',
      metadata: {
        isGenerated: true,
        isRequisite: true
      },
      type: 'String'
    }],
    fieldName: 'node',
    kind: 'Query',
    metadata: {
      isAbstract: true,
      identifyingArgName: 'id',
      identifyingArgType: 'ID!'
    },
    name: 'Unknown',
    type: 'Node'
  };
}();
`;

exports[`BabelPluginRelay matches expected output: templateString.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = \`Just a template string.\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var Relay = require('react-relay');
var x = \`Just a template string.\`;
`;

exports[`BabelPluginRelay matches expected output: unionWithTypename.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
var foo = Relay.QL\`
  query UnionWithTypename {
    media(id: 123) {
      __typename
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
var foo = function () {
  return {
    calls: [{
      kind: "Call",
      metadata: {
        type: "Int"
      },
      name: "id",
      value: {
        kind: "CallValue",
        callValue: 123
      }
    }],
    children: [{
      fieldName: "__typename",
      kind: "Field",
      metadata: {
        isRequisite: true
      },
      type: "String"
    }],
    fieldName: "media",
    kind: "Query",
    metadata: {
      isAbstract: true,
      identifyingArgName: "id",
      identifyingArgType: "Int"
    },
    name: "UnionWithTypename",
    type: "Media"
  };
}();
`;

exports[`BabelPluginRelay matches expected output: unmaskDirectiveCaller.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');
const CompatUtil = require('CompatUtil');
const CompatPage = require('CompatPage');

module.exports = Relay.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer {
      marketplace_explore{
        count
      }
      ...CompatUtil_viewer1 @relay(mask: false)
    }
  \`,

  page: graphql\`
    fragment CompatProfile_page on Page {
      ...CompatPage_page
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');
const CompatUtil = require('CompatUtil');
const CompatPage = require('CompatPage');

module.exports = Relay.createFragmentContainer(CompatProfile, {
  viewer: {
    modern: function () {
      return require('./__generated__/CompatProfile_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatUtil_viewer1 = RelayQL_GENERATED.__getClassicFragment(CompatUtil.viewer1.viewer1 || CompatUtil.viewer1, true).node;

      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              children: [{
                fieldName: 'count',
                kind: 'Field',
                metadata: {},
                type: 'Int'
              }],
              fieldName: 'marketplace_explore',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true
              },
              type: 'MarketplaceExploreConnection'
            }, RelayQL_GENERATED.__frag(CompatUtil_viewer1)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_viewer',
            type: 'Viewer'
          };
        }()
      };
    }
  },

  page: {
    modern: function () {
      return require('./__generated__/CompatProfile_page.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatPage_page = CompatPage.getFragment('page');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, RelayQL_GENERATED.__frag(CompatPage_page)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatProfile_page',
            type: 'Page'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: unmaskDirectiveInTheSameModule.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

/*
 * When unmasking fragment in the same module, you need to bind it to a 
 * local variable with the conventional naming.
 */
const actor = graphql\`
  fragment CompatUtil_actor on Actor {
    id
    name
  }
\`;

module.exports = {
  /*
   * you could also export \`CompatUtil_actor\` for compat mode by commenting
   * out the next line
   */
  // actor,
  viewer: graphql\`
    fragment CompatUtil_viewer on Viewer {
      ...CompatUtil_actor @relay(mask: false)
    }
  \`,
};

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

/*
 * When unmasking fragment in the same module, you need to bind it to a 
 * local variable with the conventional naming.
 */
const actor = {
  actor: {
    modern: function () {
      return require('./__generated__/CompatUtil_actor.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {
              isAbstract: true
            },
            name: 'CompatUtil_actor',
            type: 'Actor'
          };
        }()
      };
    }
  }
};

module.exports = {
  /*
   * you could also export \`CompatUtil_actor\` for compat mode by commenting
   * out the next line
   */
  // actor,
  viewer: {
    modern: function () {
      return require('./__generated__/CompatUtil_viewer.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatUtil_actor = RelayQL_GENERATED.__getClassicFragment(actor.actor, true).node;

      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [RelayQL_GENERATED.__frag(CompatUtil_actor)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatUtil_viewer',
            type: 'Viewer'
          };
        }()
      };
    }
  }
};
`;

exports[`BabelPluginRelay matches expected output: unmaskDirectiveSharedModule.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

module.exports = {
  viewer1: graphql\`
    fragment CompatUtil_viewer1 on Viewer {
      actor {
        id
        name
      }
    }
  \`,
  viewer2: graphql\`
    fragment CompatUtil_viewer2 on Viewer {
      actor {
        id
      }
    }
  \`,
};

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

module.exports = {
  viewer1: {
    modern: function () {
      return require('./__generated__/CompatUtil_viewer1.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              children: [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: 'name',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatUtil_viewer1',
            type: 'Viewer'
          };
        }()
      };
    }
  },
  viewer2: {
    modern: function () {
      return require('./__generated__/CompatUtil_viewer2.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              children: [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatUtil_viewer2',
            type: 'Viewer'
          };
        }()
      };
    }
  }
};
`;

exports[`BabelPluginRelay matches expected output: unmaskDirectiveSharedModule-2.text 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

module.exports = graphql\`
  fragment CompatUtil_viewer1 on Viewer {
    actor {
      id
      name
    }
  }

  fragment CompatUtil_viewer2 on Viewer {
    actor {
      id
    }
  }
\`;

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatUtil
 */

'use strict';

const graphql = require('graphql');

module.exports = {
  viewer1: {
    modern: function () {
      return require('./__generated__/CompatUtil_viewer1.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              children: [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: 'name',
                kind: 'Field',
                metadata: {},
                type: 'String'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatUtil_viewer1',
            type: 'Viewer'
          };
        }()
      };
    }
  },
  viewer2: {
    modern: function () {
      return require('./__generated__/CompatUtil_viewer2.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [{
              children: [{
                fieldName: 'id',
                kind: 'Field',
                metadata: {
                  isRequisite: true
                },
                type: 'ID'
              }, {
                fieldName: '__typename',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              fieldName: 'actor',
              kind: 'Field',
              metadata: {
                canHaveSubselections: true,
                inferredRootCallName: 'node',
                inferredPrimaryKey: 'id',
                isAbstract: true
              },
              type: 'Actor'
            }],
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {},
            name: 'CompatUtil_viewer2',
            type: 'Viewer'
          };
        }()
      };
    }
  }
};
`;

exports[`BabelPluginRelay matches expected output: unmaskDirectiveWithArguments.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatProfile
 */

'use strict';

const graphql = require('graphql');
const CompatPage = require('CompatPage');
const CompatUtil = require('CompatUtil');

module.exports = Relay.createFragmentContainer(CompatProfile, {
  viewer: graphql\`
    fragment CompatProfile_viewer on Viewer {
      ...CompatUtil_viewer
        @relay(mask: false)
        @arguments(count: 10)
    }
  \`,
  page: graphql\`
    fragment CompatProfile_page on Page {
      ...CompatPage_page
    }
  \`
});

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
ERROR:

Error: unknown: BabelPluginRelay: Cannot use both \`@arguments\` and \`@relay(mask: false)\` on the same fragment spread when in compat mode.
`;

exports[`BabelPluginRelay matches expected output: within-class-reference.txt 1`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

const {createFragmentContainer, graphql} = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(
      this.props.relay,
      graphql\`
        mutation ActorSubscribe($input: ActorSubscribeInput!) {
          actorSubscribe(input: $input) {
            subscribee {
              ...CompatProfile
            }
          }
        }
      \`,
      { input: { subscribeeId: 123 } }
    )
  }
}

module.exports = createFragmentContainer(CompatProfile, graphql\`
  fragment CompatProfile on Actor {
    name
    subscribeStatus
    ...CompatProfilePic_user
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

var _graphql;

const { createFragmentContainer, graphql } = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(this.props.relay, _graphql || (_graphql = function () {
      return require('./__generated__/ActorSubscribe.graphql');
    }), { input: { subscribeeId: 123 } });
  }
}

module.exports = createFragmentContainer(CompatProfile, {
  data: function () {
    return require('./__generated__/CompatProfile.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: within-class-reference.txt 2`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

const {createFragmentContainer, graphql} = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(
      this.props.relay,
      graphql\`
        mutation ActorSubscribe($input: ActorSubscribeInput!) {
          actorSubscribe(input: $input) {
            subscribee {
              ...CompatProfile
            }
          }
        }
      \`,
      { input: { subscribeeId: 123 } }
    )
  }
}

module.exports = createFragmentContainer(CompatProfile, graphql\`
  fragment CompatProfile on Actor {
    name
    subscribeStatus
    ...CompatProfilePic_user
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

var _graphql;

const { createFragmentContainer, graphql } = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(this.props.relay, _graphql || (_graphql = {
      modern: function () {
        return require('./__generated__/ActorSubscribe.graphql');
      },
      classic: function (RelayQL_GENERATED) {
        const CompatProfile = (CompatProfile.__container__ || CompatProfile).getFragment('data');
        return {
          kind: 'OperationDefinition',
          argumentDefinitions: [{
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'input'
          }],
          name: 'ActorSubscribe',
          operation: 'mutation',
          node: function () {
            return {
              calls: [{
                kind: 'Call',
                metadata: {},
                name: 'actorSubscribe',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'input'
                }
              }],
              children: [{
                children: [].concat.apply([], [{
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }, {
                  fieldName: '__typename',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'String'
                }, RelayQL_GENERATED.__frag(CompatProfile)]),
                fieldName: 'subscribee',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  inferredRootCallName: 'node',
                  inferredPrimaryKey: 'id',
                  isAbstract: true
                },
                type: 'Actor'
              }, {
                fieldName: 'clientMutationId',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              kind: 'Mutation',
              metadata: {
                inputType: 'ActorSubscribeInput'
              },
              name: 'ActorSubscribe',
              responseType: 'ActorSubscribeResponsePayload'
            };
          }()
        };
      }
    }), { input: { subscribeeId: 123 } });
  }
}

module.exports = createFragmentContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('./__generated__/CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatProfilePic_user = CompatProfilePic.getFragment('user');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'subscribeStatus',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {
              isAbstract: true
            },
            name: 'CompatProfile',
            type: 'Actor'
          };
        }()
      };
    }
  }
});
`;

exports[`BabelPluginRelay matches expected output: within-class-reference.txt 3`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

const {createFragmentContainer, graphql} = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(
      this.props.relay,
      graphql\`
        mutation ActorSubscribe($input: ActorSubscribeInput!) {
          actorSubscribe(input: $input) {
            subscribee {
              ...CompatProfile
            }
          }
        }
      \`,
      { input: { subscribeeId: 123 } }
    )
  }
}

module.exports = createFragmentContainer(CompatProfile, graphql\`
  fragment CompatProfile on Actor {
    name
    subscribeStatus
    ...CompatProfilePic_user
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

var _graphql;

const { createFragmentContainer, graphql } = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(this.props.relay, _graphql || (_graphql = function () {
      return require('ActorSubscribe.graphql');
    }), { input: { subscribeeId: 123 } });
  }
}

module.exports = createFragmentContainer(CompatProfile, {
  data: function () {
    return require('CompatProfile.graphql');
  }
});
`;

exports[`BabelPluginRelay matches expected output: within-class-reference.txt 4`] = `
~~~~~~~~~~ INPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

const {createFragmentContainer, graphql} = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(
      this.props.relay,
      graphql\`
        mutation ActorSubscribe($input: ActorSubscribeInput!) {
          actorSubscribe(input: $input) {
            subscribee {
              ...CompatProfile
            }
          }
        }
      \`,
      { input: { subscribeeId: 123 } }
    )
  }
}

module.exports = createFragmentContainer(CompatProfile, graphql\`
  fragment CompatProfile on Actor {
    name
    subscribeStatus
    ...CompatProfilePic_user
  }
\`);

~~~~~~~~~~ OUTPUT ~~~~~~~~~~
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule CompatStory
 */

'use strict';

var _graphql;

const { createFragmentContainer, graphql } = require('react-relay/classic');
const React = require('react');
const CompatProfilePic = require('CompatProfilePic');

class CompatProfile extends React.Component {
  render() {
    return <div>
      <CompatProfilePic user={this.props.data} />
      {this.props.data.name}
      {this.props.data.subscribeStatus}
    </div>;
  }

  doSomething() {
    commitMutation(this.props.relay, _graphql || (_graphql = {
      modern: function () {
        return require('ActorSubscribe.graphql');
      },
      classic: function (RelayQL_GENERATED) {
        const CompatProfile = (CompatProfile.__container__ || CompatProfile).getFragment('data');
        return {
          kind: 'OperationDefinition',
          argumentDefinitions: [{
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'input'
          }],
          name: 'ActorSubscribe',
          operation: 'mutation',
          node: function () {
            return {
              calls: [{
                kind: 'Call',
                metadata: {},
                name: 'actorSubscribe',
                value: {
                  kind: 'CallVariable',
                  callVariableName: 'input'
                }
              }],
              children: [{
                children: [].concat.apply([], [{
                  fieldName: 'id',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'ID'
                }, {
                  fieldName: '__typename',
                  kind: 'Field',
                  metadata: {
                    isGenerated: true,
                    isRequisite: true
                  },
                  type: 'String'
                }, RelayQL_GENERATED.__frag(CompatProfile)]),
                fieldName: 'subscribee',
                kind: 'Field',
                metadata: {
                  canHaveSubselections: true,
                  inferredRootCallName: 'node',
                  inferredPrimaryKey: 'id',
                  isAbstract: true
                },
                type: 'Actor'
              }, {
                fieldName: 'clientMutationId',
                kind: 'Field',
                metadata: {
                  isGenerated: true,
                  isRequisite: true
                },
                type: 'String'
              }],
              kind: 'Mutation',
              metadata: {
                inputType: 'ActorSubscribeInput'
              },
              name: 'ActorSubscribe',
              responseType: 'ActorSubscribeResponsePayload'
            };
          }()
        };
      }
    }), { input: { subscribeeId: 123 } });
  }
}

module.exports = createFragmentContainer(CompatProfile, {
  data: {
    modern: function () {
      return require('CompatProfile.graphql');
    },
    classic: function (RelayQL_GENERATED) {
      const CompatProfilePic_user = CompatProfilePic.getFragment('user');
      return {
        kind: 'FragmentDefinition',
        argumentDefinitions: [],
        node: function () {
          return {
            children: [].concat.apply([], [{
              fieldName: 'name',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'subscribeStatus',
              kind: 'Field',
              metadata: {},
              type: 'String'
            }, {
              fieldName: 'id',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'ID'
            }, {
              fieldName: '__typename',
              kind: 'Field',
              metadata: {
                isGenerated: true,
                isRequisite: true
              },
              type: 'String'
            }, RelayQL_GENERATED.__frag(CompatProfilePic_user)]),
            id: RelayQL_GENERATED.__id(),
            kind: 'Fragment',
            metadata: {
              isAbstract: true
            },
            name: 'CompatProfile',
            type: 'Actor'
          };
        }()
      };
    }
  }
});
`;